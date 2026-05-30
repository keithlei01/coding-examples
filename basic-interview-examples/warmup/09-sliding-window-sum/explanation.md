# Explanation

Build the sum of the first `k` elements, push it, then slide: subtract `nums[i - k]`, add `nums[i]`.

## Constraints

- `1 <= k`; return `[]` when `k > nums.length` or `nums` is empty.
- Length ≤ 20_000 — aim for **O(n)** time.
- Windows are contiguous and fixed size.

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| `k === nums.length` | One sum (whole array) | Single window, one result |
| `k === 1` | Copy of `nums` | Each window is one element |
| `k > nums.length` | `[]` | Early return |
| Empty `nums` | `[]` | `k > 0 > length` guard |
| Negative numbers | Correct sums | Addition works as usual |
| Example `[1,2,3,4,5], k=3` | `[6, 9, 12]` | Slide after first window |

## Naive vs optimal

**Naive:** re-sum each window — O(n × k). Fine to mention, then optimize.

**Optimal:** running window sum — **O(n)** time, **O(1)** extra space besides output.

## Business connection

Fixed windows preview **rolling spend**, **moving averages**, and **rate limits**. Medium [01-rolling-revenue-average](../medium/01-rolling-revenue-average/) adds calendar days; hard [01-sliding-window-metrics](../hard/01-sliding-window-metrics/) adds stream max queries.

## IC5 talking point

For live metrics, mention **event-time vs processing-time** and whether windows are tumbling (this problem) or sliding with partial buckets.
