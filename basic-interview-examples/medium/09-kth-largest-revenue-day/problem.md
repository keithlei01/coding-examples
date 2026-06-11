# 09 — Kth Largest Revenue Day

## Context (LeetCode #215 — your interview question)

Given **unsorted** daily revenue (cents), find the **kth largest** day (1 = biggest day).

Interviewer expects **min-heap of size k** — not full sort.

## Task

Implement `kthLargestRevenue(dailyCents, k)`.

- `dailyCents`: unsorted integers
- Return the **kth largest** value (1-indexed: k=1 → max)
- Use a heap approach — target **O(n log k)** time

## Example

```javascript
kthLargestRevenue([300, 100, 500, 200, 400], 2);
// 400  (sorted desc: 500, 400, 300, 200, 100)
```

## What they're testing

- Min-heap size `k`: root = kth largest when done
- Not: O(n log n) full sort (works but mention heap is better when k is small)

## LeetCode

[215 — Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) — **Medium**

## Follow-ups

- Quickselect O(n) average?
- What if data streams in? → see [11](../11-kth-largest-in-stream/)
