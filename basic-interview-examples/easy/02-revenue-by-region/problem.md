# 02 — Revenue by Region

## Context

Sales transactions arrive as strings: `"region,amountCents"` (e.g. `"US,1999"`). Amounts are integers in **cents**. Negative amounts are refunds.

## Task

Return `{ region: totalRevenueDollars }` for each region, where dollars = sum(cents) / 100, rounded to **2 decimal places** (standard half-up at display layer; here use fixed 2-decimal number).

Sort output as array `[{ region, revenue }]` by `revenue` descending, then `region` ascending for ties.

## Example

```javascript
const lines = ["US,1000", "EU,500", "US,-200", "EU,500"];
// US: (1000 - 200) / 100 = 8.00
// EU: 10.00
// [{ region: "EU", revenue: 10 }, { region: "US", revenue: 8 }]
```

## Constraints

- Invalid lines (wrong format, non-numeric amount) should be **skipped** and optionally counted (return second value if you extend API).
- Up to 50_000 lines.

## Follow-ups

- How do you prevent double-counting duplicate transaction IDs in a pipeline?
