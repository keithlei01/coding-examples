# 10 — ROAS by Campaign

## Context (interview-style)

**ROAS** (Return On Ad Spend) = attributed revenue ÷ ad spend. Advertisers compare campaigns by how much revenue each dollar of spend drives.

## Task

Implement `roasByCampaign(rows)`.

Input: `{ campaignId, revenueCents, spendCents }[]` — each row contributes to that campaign’s totals (e.g. daily attribution rows).

For each campaign with **spendCents sum > 0**, return:

```javascript
{ campaignId, revenueDollars, spendDollars, roas }
```

- Sum integer cents separately; convert to dollars at the end (round **2** decimals).
- `roas = revenueDollars / spendDollars`, rounded to **4** decimals.
- Skip rows with empty `campaignId` or non-finite cents.
- **Omit** campaigns where total `spendCents <= 0` after summing.

Sort by `roas` **descending**, then `campaignId` **ascending**.

## Example

```javascript
roasByCampaign([
  { campaignId: "A", revenueCents: 5000, spendCents: 1000 },
  { campaignId: "A", revenueCents: 3000, spendCents: 1000 },
  { campaignId: "B", revenueCents: 2000, spendCents: 2000 },
]);
// A: rev $80, spend $20 → roas 4.0
// B: rev $20, spend $20 → roas 1.0
```

## Constraints

- Up to 100_000 rows.

## Follow-ups (verbal)

- ROAS vs ROI (margin)?
- View-through vs click-attributed revenue?
- Zero-spend organic rows?
