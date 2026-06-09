# 06 — Ad Spend by Campaign

## Context (interview-style)

Ads billing exports rows of campaign spend. Finance needs **total spend per campaign** for pacing and budget reviews. Amounts are stored as integer **cents** (USD).

## Task

Implement `adSpendByCampaign(records)`.

Input: `{ campaignId: string, spendCents: number }[]`

Return array sorted by:

1. `spendDollars` **descending**
2. `campaignId` **ascending** (tie-break)

```javascript
[{ campaignId: "c1", spendDollars: 42.50 }, ...]
```

`spendDollars = sum(spendCents) / 100`, rounded to **2 decimal places**.

## Example

```javascript
adSpendByCampaign([
  { campaignId: "summer", spendCents: 5000 },
  { campaignId: "winter", spendCents: 3000 },
  { campaignId: "summer", spendCents: 2500 },
]);
// summer: 7500 cents → $75.00
// winter: $30.00
// [{ campaignId: "summer", spendDollars: 75 }, { campaignId: "winter", spendDollars: 30 }]
```

## Constraints

- Up to 50_000 rows.
- `spendCents` may be negative (credits/refunds).
- Skip rows with empty `campaignId` or non-finite `spendCents`.

## Follow-ups (verbal)

- Daily vs lifetime spend caps? (see [medium/07](../../medium/07-daily-advertiser-spend-cap/))
- Multi-currency campaigns?
- Dedupe by `invoiceLineId` before summing?
