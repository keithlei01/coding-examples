# 01 — Rolling 7-Day Revenue Average

## Context

Daily revenue snapshots: `{ date: "YYYY-MM-DD", revenueCents }`. Dates may be **sparse** (missing days = no revenue, not zero in input—but treat missing calendar days in the window as **0 revenue** when computing the rolling average).

## Task

For each date present in the input (sorted ascending), compute the **inclusive** 7-day rolling average revenue in dollars (2 decimal places), considering that date and the 6 prior calendar days.

Return `[{ date, rollingAvgDollars }]`.

## Example

```javascript
const data = [
  { date: "2024-01-01", revenueCents: 700 },
  { date: "2024-01-07", revenueCents: 700 },
];
// Window for 2024-01-07: Jan 1–7 → 700+0+0+0+0+0+700 = 1400 cents / 7 days = 2.00 dollars
```

## Constraints

- Span up to 365 days of records.
- All dates valid ISO dates, UTC.

## Follow-ups

- Rolling 28-day for ads pacing?
- O(1) sliding window update?
