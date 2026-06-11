# 12 — Campaign Budget Utilization

## Context (interview-style)

Pacing dashboards show **how much of a campaign budget is spent**. Ops teams watch utilization to avoid under-delivery or overspend.

## Task

Implement `budgetUtilization(spendEvents, budgets)`.

- `spendEvents`: `{ campaignId, spendCents }[]`
- `budgets`: `Map<campaignId, budgetCents>` (daily or lifetime budget in cents)

For each `campaignId` in `budgets`, return:

```javascript
{ campaignId, spendDollars, budgetDollars, utilizationPct }
```

- Sum spend per campaign from events (skip invalid rows)
- `utilizationPct = (spendDollars / budgetDollars) * 100`, rounded **2** decimals
- Include campaigns even when spend is **0** (utilization 0)
- **Allow** `utilizationPct > 100` when over budget
- Skip spend rows for campaigns **not** in `budgets`

Sort by `utilizationPct` **descending**, then `campaignId` ascending.

## Example

```javascript
const budgets = new Map([["A", 10000], ["B", 5000]]);
budgetUtilization([
  { campaignId: "A", spendCents: 7500 },
  { campaignId: "B", spendCents: 5000 },
], budgets);
// A: $75 / $100 → 75%
// B: $50 / $50 → 100%
```

## Constraints

- Up to 50_000 spend rows; budgets size ≤ 1_000.

## Follow-ups (verbal)

- Hard cap vs soft cap when utilization > 100%?
- Link to [medium/07](../../medium/07-daily-advertiser-spend-cap/) daily reject logic?
