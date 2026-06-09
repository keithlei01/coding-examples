# Explanation — Rolling 7-Day Revenue Average

## Interview framing

On CoderPad, Business Eng screens often **give date helpers** (or pre-aligned daily rows) so you spend time on:

1. **What belongs in the window** (calendar days, sparse → 0)
2. **Money** (`revenueCents`, divide by 7, then dollars)
3. **Complexity** (O(n) with fixed window size 7)

Date string formatting is production plumbing—not usually the signal.

## Approach (what you implement)

1. Sort rows by `date` (or assume sorted if interviewer says so).
2. `Map` date → `revenueCents`.
3. For each output date, loop `i = 0..6`: `addDays(date, -i)`, add `map.get(day) || 0`.
4. `rollingAvgDollars = round2(sumCents / 7 / 100)`.

```javascript
for (let i = 0; i < 7; i++) {
  sumCents += centsByDate.get(addDays(date, -i)) || 0;
}
```

## Constraints

- Up to 365 rows; valid ISO UTC dates.
- Inclusive window: output date + 6 prior **calendar** days (not “previous 6 rows”).
- Missing calendar days in input → **0** revenue in the sum.
- Dollars, 2 decimal places.

## Edge cases

| Case | Handling |
|------|----------|
| Empty input | `[]` |
| Sparse dates | `get(d) \|\| 0` for each day in window |
| First date in series | Days before range contribute 0 |
| Duplicate dates | `Map` — last row wins |
| Jan 1 & Jan 7 example | $1.00 and $2.00 |

## O(1) sliding window (IC5 bonus)

If you walk a **dense** day-by-day timeline in order, keep a 7-day queue and add/subtract as the window slides—same idea as warmup sliding-window-sum. Sparse **output-only-on-input-dates** usually keeps the 7-step loop per row (still O(n)).

## Business use

- Smooths daily noise for reviews.
- Ads pacing vs daily spend spikes.

## Pitfalls to mention verbally

- **Timezone:** fiscal day boundaries.
- **Backfill:** late data changes historical rollups—recompute or versioned snapshots.

## Complexity

- Time: O(n × 7) = O(n)
- Space: O(n) for the map
