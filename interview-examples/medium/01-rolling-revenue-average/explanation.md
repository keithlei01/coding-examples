# Explanation — Rolling 7-Day Revenue Average

## Approach

1. Index revenue by date.
2. For each output date, walk 6 days back on the calendar (not just previous rows).
3. Missing days contribute 0—important for “true” calendar windows used in finance pacing.

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
