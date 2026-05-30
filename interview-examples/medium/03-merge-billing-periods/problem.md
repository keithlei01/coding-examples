# 03 — Merge Overlapping Billing Periods

## Context

Advertiser contracts have billing periods `[startDay, endDay]` inclusive, where days are integers (day index from epoch). Multiple periods for the same `advertiserId` may overlap. Finance needs **merged** periods per advertiser for invoicing.

## Task

Given `periods = [{ advertiserId, start, end }]`, return merged periods per advertiser, sorted by `start` ascending.

Merge rule: intervals overlap or touch (`end1 + 1 >= start2`) → combine into one.

## Example

```javascript
[
  { advertiserId: "A", start: 1, end: 5 },
  { advertiserId: "A", start: 6, end: 10 },
  { advertiserId: "A", start: 8, end: 12 },
];
// → [{ advertiserId: "A", start: 1, end: 12 }]
```

## Constraints

- Up to 100_000 periods, 10_000 advertisers.

## Follow-ups

- Attach spend per period—how to allocate merged window?
- Real dates instead of day indices?
