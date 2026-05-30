# Explanation — Sliding Window Max

## Pattern

Classic **deque-based sliding window maximum** (LeetCode 239)—maps directly to ops dashboards: “peak spend in last 30 minutes.”

## Invariant

Deque stores candidate points with **decreasing** `value`; front is max for current window. Drop from front when `timestamp <= cutoff`; pop from back while `value` ≤ new push.

## Constraints

- Up to 200_000 operations.
- Push timestamps **strictly increase**.
- Window for `max` at time `t`: pushes with timestamp in **`(t - k, t]`** (lower exclusive, upper inclusive).
- Empty window → return **`null`** (not 0).

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| `max` before any push | `null` | Deque empty after expiry |
| All pushes expired | `null` | Pop front while `timestamp <= t - k` |
| Example at t=500, k=300 | Max 25 | Push at 100 expired; 200 and 500 remain |
| Single element in window | That value | Deque front |
| `k = 0` | Window `(t, t]` always empty | Returns `null` unless clarified otherwise |

## Complexity

- Each push/pop O(1) amortized → **O(n)** total.
- Space O(window size) worst case.

## Business Eng framing

- Real-time alerting: if max(errors) in 5m > threshold, page on-call.
- Contrast with batch warehouse max over 5m buckets (late data, coarser).

## Distributed note

Partition by shard key; window max is not globally mergeable without sharing boundary events—mention **approximate** algorithms (count-max sketch) for scale.
