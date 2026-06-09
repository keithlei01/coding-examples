# 07 — Click-Through Rate (CTR) by Ad

## Context (interview-style)

Ads performance logs stream **impression** and **click** events per ad. PMs use **CTR** = clicks ÷ impressions to compare creative performance.

## Task

Implement `ctrByAd(events)`.

Input: `{ adId: string, eventType: "impression" | "click" }[]`

For each ad with at least one impression, return:

```javascript
{ adId, impressions, clicks, ctr }
```

- `ctr = clicks / impressions`, rounded to **4 decimal places**
- Sort by `ctr` **descending**, then `adId` **ascending**
- Ads with **zero impressions** are omitted (no row)

## Example

```javascript
ctrByAd([
  { adId: "A", eventType: "impression" },
  { adId: "A", eventType: "impression" },
  { adId: "A", eventType: "click" },
  { adId: "B", eventType: "impression" },
]);
// A: 1 click / 2 impressions → ctr 0.5
// B: 0 clicks / 1 impression → ctr 0
```

## Constraints

- Up to 200_000 events.
- Unknown `eventType` values are **ignored**.
- Multiple events same ad/type count toward totals (no dedupe).

## Follow-ups (verbal)

- CTR vs unique CTR (distinct users)?
- View-through vs click attribution?
- Filter bot traffic before computing CTR?
