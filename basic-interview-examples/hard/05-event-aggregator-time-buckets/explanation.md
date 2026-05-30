# Explanation — Time-Bucket Event Aggregator

## Design

In-memory **rollup** table keyed by `(metric, bucketStart)`—same idea as Prometheus histograms, Flink tumbling windows, or Meta-style minute-level spend cubes.

## Constraints

- Up to 1_000_000 records.
- `bucketSeconds >= 1`.
- Bucket: `floor(timestamp / bucketSeconds) * bucketSeconds`.
- `query`: sum values for events with `timestamp` in `[from, to]` inclusive, **aligned to bucket boundaries**.
- `topMetrics(k, from, to)`: top k by total; tie-break metric name ascending.

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| Unknown metric on query | `0` | Missing map entry |
| Empty range / no overlap | `0` | Loop finds no buckets |
| Two events same bucket | Summed | `record` adds to bucket total |
| Example `[0,59]` | 15 | Both events in bucket 0 |
| `topMetrics` tie | Name ascending | `localeCompare` |
| Zero net total metric | Omitted from top list | Filter `total !== 0` |
| `k = 0` | `[]` | `slice(0, 0)` |

**Query semantics:** The reference solution sums **whole bucket totals** when a bucket overlaps the range (Prometheus-style bucket granularity). Event-level filtering at partial bucket edges would require storing per-event data or sub-bucket indexes—mention this trade-off in an interview.

## Query range overlap

Bucket `[b, b+B-1]` overlaps `[from, to]` iff `b <= to` and `b+B-1 >= from`.

## IC5 system design hooks

| Topic | Choice |
|-------|--------|
| Retention | TTL evict buckets older than N days |
| Late events | Allow retraction job or watermark |
| Cardinality explosion | Cap metric keys, sample |

## Complexity

- `record`: O(1)
- `query`: O(buckets in range)
- `topMetrics`: O(metrics × buckets per metric) in naive form
