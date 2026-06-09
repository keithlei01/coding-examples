# 08 — Cost Per Acquisition (CPA) by Campaign

## Context (interview-style)

Growth teams track **CPA** = ad spend ÷ conversions. You receive a mixed event log of **spend** and **conversion** rows per campaign.

## Task

Implement `cpaByCampaign(events)`.

Input: `{ campaignId, eventType: "spend" | "conversion", amountCents?: number }[]`

- `spend` rows include `amountCents` (integer, may be negative for credits)
- `conversion` rows count as one conversion (ignore `amountCents` if present)

For each campaign with **at least 1 conversion**, return:

```javascript
{ campaignId, spendDollars, conversions, cpaDollars }
```

- `spendDollars` = sum(spend `amountCents`) / 100, rounded **2** decimals
- `cpaDollars` = `spendDollars / conversions`, rounded **2** decimals
- **Omit** campaigns with zero conversions
- Skip rows with empty `campaignId`, unknown `eventType`, or non-finite `amountCents` on spend rows

Sort by `cpaDollars` **ascending** (lower CPA is better), then `campaignId` ascending.

## Example

```javascript
cpaByCampaign([
  { campaignId: "A", eventType: "spend", amountCents: 1000 },
  { campaignId: "A", eventType: "conversion" },
  { campaignId: "A", eventType: "conversion" },
  { campaignId: "B", eventType: "spend", amountCents: 500 },
]);
// A: $10 / 2 conv → cpa $5.00
// B: omitted (0 conversions)
```

## Constraints

- Up to 100_000 events.

## Follow-ups (verbal)

- CPA vs CAC (customer vs any conversion)?
- Attribution window for conversions?
- Credit spend rows reducing CPA?
