# 04 — Campaign Budget Scheduling (Maximum Non-Overlapping Spend)

## Context

Campaigns need daily budget blocks. Each request is `{ campaignId, startDay, endDay, budgetCents }` (inclusive days). The platform can run **at most one** campaign per day (simplified capacity). Maximize **total budget cents** scheduled without overlapping days.

Same `campaignId` may appear multiple times—you can pick at most one interval per campaignId.

## Task

Return `{ maxBudgetCents, scheduled: [{ campaignId, startDay, endDay, budgetCents }] }`.

## Example

```javascript
[
  { campaignId: "A", startDay: 1, endDay: 3, budgetCents: 100 },
  { campaignId: "B", startDay: 2, endDay: 4, budgetCents: 200 },
  { campaignId: "C", startDay: 5, endDay: 6, budgetCents: 150 },
];
// Pick B + C = 350 (A overlaps B)
```

## Constraints

- n ≤ 5000 intervals.

## Follow-ups

- Multiple slots per day (k capacity)?
- Weighted interval scheduling with profits?
