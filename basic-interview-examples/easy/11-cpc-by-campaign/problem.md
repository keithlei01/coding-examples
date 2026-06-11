# 11 — Cost Per Click (CPC) by Campaign

## Context (interview-style)

Advertisers compare **CPC** = spend ÷ clicks to judge auction efficiency. Same pattern as CPA, but the denominator is **clicks**.

## Task

Implement `cpcByCampaign(events)`.

Input: `{ campaignId, eventType: "spend" | "click", amountCents?: number }[]`

- `spend` rows include `amountCents` (integer cents)
- `click` rows count as one click

Return per campaign with **at least 1 click**:

```javascript
{ campaignId, spendDollars, clicks, cpcDollars }
```

- `cpcDollars = spendDollars / clicks`, rounded **2** decimals
- Omit campaigns with zero clicks
- Skip empty `campaignId`, unknown `eventType`, non-finite `amountCents` on spend

Sort by `cpcDollars` **ascending** (lower CPC is better), then `campaignId` ascending.

## Example

```javascript
cpcByCampaign([
  { campaignId: "A", eventType: "spend", amountCents: 600 },
  { campaignId: "A", eventType: "click" },
  { campaignId: "A", eventType: "click" },
  { campaignId: "A", eventType: "click" },
]);
// $6 / 3 clicks → cpc $2.00
```

## Constraints

- Up to 100_000 events.

## Follow-ups (verbal)

- CPC vs CPM pricing models?
- Bot clicks excluded upstream?
