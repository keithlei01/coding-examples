# 01 — Real-Time Max in Sliding Window (Dashboard Metric)

## Context

Business dashboards show the **maximum** value in the last `k` minutes of a metric stream (e.g. peak concurrent campaigns). You receive `queries` interleaved with `values`:

- `{ type: "push", timestamp, value }` — add point (timestamps strictly increase for pushes)
- `{ type: "max", timestamp }` — max `value` among pushes with `timestamp` in `(current - k, current]` inclusive

If window empty, return `null`.

## Task

Process all queries in order; return array of results for each `max` query.

## Example

```javascript
k = 300;
queries = [
  { type: "push", timestamp: 100, value: 10 },
  { type: "push", timestamp: 200, value: 25 },
  { type: "max", timestamp: 250 },  // → 25
  { type: "push", timestamp: 500, value: 5 },
  { type: "max", timestamp: 500 }, // window (200,500] drops 100 → 25
];
```

## Constraints

- Up to 200_000 operations.

## Follow-ups

- Sum/average in window?
- Distributed stream processing?
