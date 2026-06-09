# Explanation — Ad Spend by Campaign

## Approach

1. `Map<campaignId, totalCents>` — sum integer cents per campaign.
2. Skip invalid rows (empty id, non-finite cents).
3. Convert to dollars at the end; sort desc by spend, asc by `campaignId`.

Same pattern as [02-revenue-by-region](../02-revenue-by-region/) with ads naming.

## Edge cases

| Case | Handling |
|------|----------|
| Empty input | `[]` |
| Negative `spendCents` | Credit/refund reduces total |
| Tie on spend | `campaignId` ascending |
| Invalid rows | Skipped |

## Complexity

- **Time:** O(n + c log c) for n rows, c campaigns
- **Space:** O(c)

## IC5 talking points

- **Pacing:** compare daily spend to cap (medium/07).
- **Billing pipeline:** idempotent ingest, dedupe line items.
- **Reporting:** cents in warehouse, dollars only in API layer.
