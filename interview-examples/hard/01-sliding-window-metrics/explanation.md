# Explanation — Sliding Window Max

## Pattern

Classic **deque-based sliding window maximum** (LeetCode 239)—maps directly to ops dashboards: “peak spend in last 30 minutes.”

## Invariant

Deque stores candidate points with **decreasing** `value`; front is max for current window. Drop from front when `timestamp <= cutoff`; pop from back while `value` ≤ new push.

## Complexity

- Each push/pop O(1) amortized → **O(n)** total.
- Space O(window size) worst case.

## Business Eng framing

- Real-time alerting: if max(errors) in 5m > threshold, page on-call.
- Contrast with batch warehouse max over 5m buckets (late data, coarser).

## Distributed note

Partition by shard key; window max is not globally mergeable without sharing boundary events—mention **approximate** algorithms (count-max sketch) for scale.
