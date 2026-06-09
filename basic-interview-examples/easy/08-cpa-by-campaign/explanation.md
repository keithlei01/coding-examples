# Explanation — CPA by Campaign

## Approach

1. Two maps (or one object per campaign): `spendCents`, `conversions`.
2. Validate rows by `eventType`; only sum finite `amountCents` on spend.
3. Emit campaigns with `conversions > 0` only.
4. `cpaDollars = spendDollars / conversions`.

Slightly harder than [07](../07-click-through-rate-by-ad/): **two metrics merged**, division edge case (zero conversions).

## Edge cases

| Case | Handling |
|------|----------|
| Spend only | Omit campaign |
| Zero conversions | Omit |
| Negative spend (credit) | Lowers CPA |
| Unknown eventType | Skip |
| Tie on CPA | `campaignId` ascending |

## Complexity

- **Time:** O(n + c log c)
- **Space:** O(c) campaigns

## IC5 talking points

- CPA definition: which conversion event counts?
- Compare to [06](../06-ad-spend-by-campaign/) spend rollup and [04](../04-funnel-conversion-rate/) funnel.
