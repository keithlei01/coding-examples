# 13 — Effective CPM (eCPM) by Campaign

## Context (interview-style)

**eCPM** (effective cost per mille) = cost per 1,000 impressions. Used to compare campaigns with different impression volumes.

## Task

Implement `effectiveCpmByCampaign(events)`.

Input: `{ campaignId, eventType: "spend" | "impression", amountCents?: number }[]`

Return per campaign with **at least 1 impression**:

```javascript
{ campaignId, spendDollars, impressions, ecpmDollars }
```

- `ecpmDollars = (spendDollars / impressions) * 1000`, rounded **2** decimals
- Omit zero-impression campaigns
- Same validation rules as [08](../08-cpa-by-campaign/) for spend rows

Sort by `ecpmDollars` **ascending** (lower eCPM is better), then `campaignId` ascending.

## Example

```javascript
effectiveCpmByCampaign([
  { campaignId: "A", eventType: "spend", amountCents: 500 },
  { campaignId: "A", eventType: "impression" },
  { campaignId: "A", eventType: "impression" },
]);
// $5 / 2 impressions × 1000 → ecpm $2500.00
```

## Constraints

- Up to 100_000 events.

## Follow-ups (verbal)

- eCPM vs bid CPM in auction?
- Viewability-filtered impressions?
