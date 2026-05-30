# 09 — Sliding Window Sum

Warm up **fixed-size sliding windows** — used in rolling metrics, rate limits, and stream aggregations (see medium/01 and hard/01).

## Task

Implement `slidingWindowSums(nums, k)` returning an array of sums for each contiguous window of length `k`, in left-to-right order.

Window `i` covers `nums[i]` through `nums[i + k - 1]`.

## Examples

```javascript
slidingWindowSums([1, 2, 3, 4, 5], 3); // [6, 9, 12]
// windows: [1,2,3]=6, [2,3,4]=9, [3,4,5]=12

slidingWindowSums([10, 20], 1); // [10, 20]
slidingWindowSums([10, 20], 3); // []  (k > length)
slidingWindowSums([], 2);       // []
```

## Constraints

- `nums` contains only numbers.
- `1 <= k`; when `k > nums.length`, return `[]`.
- Length ≤ 20_000 — prefer **O(n)** (don't re-sum each window from scratch if you can avoid it).

## Hint

After the first window sum, slide by subtracting the element leaving and adding the element entering.
