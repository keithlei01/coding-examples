# Explanation — Rolling 7-Day Revenue Average

## Approach

1. Index revenue by date.
2. For each output date, walk 6 days back on the calendar (not just previous rows).
3. Missing days contribute 0—important for “true” calendar windows used in finance pacing.

## Constraints

- Span up to 365 days of records.
- All dates valid ISO dates, UTC.
- For **each input date**, compute inclusive 7-day rolling average (that date + 6 prior calendar days).
- Result in dollars, rounded to 2 decimal places.

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| Empty input | `[]` | No dates to process |
| Sparse dates | Missing days = 0 revenue | `centsByDate.get(d) \|\| 0` for each calendar day |
| First date in series | Partial window (days before data) | Those days contribute 0 |
| Example Jan 1 & Jan 7 | Avg 1.00 and 2.00 | Walk 7 days; Jan 7 window sums 700 on Jan 1 and Jan 7 only |
| Duplicate dates in input | Last value wins | `Map` overwrites on re-insert |
| Rounding | 2 decimal dollars | `round2(sumCents / 7 / 100)` |

## O(1) sliding window (IC5 bonus)

If you iterate dates in order on a dense timeline, maintain a queue of 7 day values and subtract/add as the window slides—**O(1)** per day after sort.

## Business use

- Smooths daily noise for **week-over-week** business reviews.
- Ads teams use rolling spend caps vs daily spikes.

## Pitfalls to mention

- **Timezone:** fiscal day boundaries.
- **Late-arriving data:** backfill changes historical rolling averages—versioned snapshots or recompute jobs.

## Complexity

Current: O(n × 7) = O(n). Space O(n) for map.
