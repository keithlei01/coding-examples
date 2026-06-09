# Explanation — ROAS by Campaign

## Approach

1. Two running sums per `campaignId`: `revenueCents`, `spendCents`.
2. Skip invalid rows; omit campaigns with `spendCents <= 0`.
3. Convert to dollars, then `roas = round4(revenueDollars / spendDollars)`.

Slightly harder than [06](../06-ad-spend-by-campaign/): **dual aggregation** + ratio + omit zero denominator.

## Edge cases

| Case | Handling |
|------|----------|
| Net zero spend (refunds) | Omit |
| Revenue without spend row | spend from map only |
| Tie on roas | campaignId asc |
| Negative revenue | Allowed in sum |

## Complexity

- **Time:** O(n + c log c)
- **Space:** O(c)

## IC5 talking points

- Attribution windows for revenue.
- ROAS vs incremental lift experiments ([medium/05](../../medium/05-ab-test-evaluation/)).
- Store cents; ratios on dollars at report time.

## Ads metrics ladder (easy)

| # | Metric |
|---|--------|
| 06 | Spend |
| 07 | CTR |
| 08 | CPA |
| 09 | Reach / frequency |
| 10 | ROAS |
