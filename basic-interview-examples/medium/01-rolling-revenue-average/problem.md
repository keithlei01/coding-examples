# 01 — Rolling 7-Day Revenue Average

## Context (interview-style)

You’re on CoderPad. The interviewer gives you **daily revenue snapshots** and asks for a **7-day rolling average** used in business reviews and ads pacing.

**Provided for you (don’t implement unless asked):**

- Dates are `"YYYY-MM-DD"` strings, UTC, already **sorted ascending**
- `addDays(isoDate, delta)` → ISO date string
- `round2(n)` → number rounded to 2 decimal places

**Your job:** implement `rolling7DayAverage(data)`.

## Data

Each row: `{ date: "YYYY-MM-DD", revenueCents: number }`.

Input may be **sparse** — if a calendar day has no row, it still counts in the window with **0 revenue** (not “skip the day”).

## Task

For **each date in the input**, compute the **inclusive** 7-day rolling average (this date + the 6 prior calendar days):

`rollingAvgDollars = (sum of revenueCents in window) / 7 / 100`, rounded to 2 decimals.

Return `[{ date, rollingAvgDollars }]` in the same order as input dates (after sort).

## Example

```javascript
const data = [
  { date: "2024-01-01", revenueCents: 700 },
  { date: "2024-01-07", revenueCents: 700 },
];
// Window for 2024-01-01: Jan 1 only in range → 700 / 7 = 100 cents/day → $1.00
// Window for 2024-01-07: Jan 1–7 → 700 + 0×5 + 700 = 1400 / 7 → $2.00
```

## What they’re testing

- Map lookup + **calendar window** (missing days = 0)
- Cents → dollars (integer money)
- Not: hand-rolling `Date` / `padStart` date formatting

## Constraints

- Up to 365 rows; valid ISO dates.

## Follow-ups (verbal)

- O(1) sliding window if you iterate a dense timeline?
- Timezones / late-arriving data changing historical rollups?
- Rolling 28-day for ads pacing?
