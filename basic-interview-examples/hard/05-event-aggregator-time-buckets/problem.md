# 05 — Time-Bucket Event Aggregator

## Context

Build `MetricAggregator(bucketSeconds)` for business events `{ metric, timestamp, value }`.

- `record(event)` — ingest (timestamps non-decreasing per metric OK globally).
- `query(metric, from, to)` — sum of `value` for events with `timestamp` in `[from, to]` inclusive, **aligned to bucket boundaries**.

Bucket for time `t` is `floor(t / bucketSeconds) * bucketSeconds`. Store aggregates per `(metric, bucketStart)`.

Additionally support `topMetrics(k, from, to)` — top k metric names by total sum in range; tie-break name ascending.

## Example

```javascript
const agg = new MetricAggregator(60);
agg.record({ metric: "spend", timestamp: 0, value: 10 });
agg.record({ metric: "spend", timestamp: 30, value: 5 });
agg.query("spend", 0, 59); // 15
agg.topMetrics(1, 0, 59); // [{ metric: "spend", total: 15 }]
```

## Constraints

- Up to 1_000_000 records, bucketSeconds ≥ 1.

## Follow-ups

- Retention / expire old buckets?
- p99 latency per bucket?
