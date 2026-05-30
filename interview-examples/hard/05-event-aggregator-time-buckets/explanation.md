# Explanation — Time-Bucket Event Aggregator

## Design

In-memory **rollup** table keyed by `(metric, bucketStart)`—same idea as Prometheus histograms, Flink tumbling windows, or Meta-style minute-level spend cubes.

## Query range

Sum buckets overlapping `[from, to]`:

- Bucket `[b, b+B-1]` overlaps iff `b <= to` and `b+B-1 >= from`.

Iterate bucket starts stepping by `bucketSeconds`—O(number of buckets in range), not O(all events).

## topMetrics

Scan distinct metrics (not every event)—acceptable for moderate cardinality; production uses **sketch** or pre-aggregated leaderboard table.

## IC5 system design hooks

| Topic | Choice |
|-------|--------|
| Retention | TTL evict buckets older than N days |
| Late events | Allow retraction job or watermark |
| Cardinality explosion | Cap metric keys, sample |

## Class vs functions

Interview may ask for `class` to show API design for a “small service” embedded in a larger system.

## Complexity

- `record`: O(1)
- `query`: O(buckets in range)
- `topMetrics`: O(metrics × buckets per metric) in naive form
