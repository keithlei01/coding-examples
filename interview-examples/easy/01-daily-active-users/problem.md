# 01 — Daily Active Users (DAU)

## Context

You receive server logs as an array of events. Each event is `{ userId: string, timestamp: number }` where `timestamp` is Unix seconds (UTC). Count **distinct users per calendar day** (UTC).

## Task

Return an array of `{ date: string, dau: number }` sorted by `date` ascending.  
`date` format: `"YYYY-MM-DD"`.

## Example

```javascript
const events = [
  { userId: "u1", timestamp: 1704067200 }, // 2024-01-01 00:00:00 UTC
  { userId: "u2", timestamp: 1704067200 },
  { userId: "u1", timestamp: 1704153600 }, // 2024-01-02
];

// Output:
// [
//   { date: "2024-01-01", dau: 2 },
//   { date: "2024-01-02", dau: 1 },
// ]
```

## Constraints

- `0 <= events.length <= 100_000`
- Multiple events per user per day count once for DAU.

## Follow-ups (verbal)

- How would you handle time zones for a global product?
- Spark/SQL sketch for the same metric at scale.
