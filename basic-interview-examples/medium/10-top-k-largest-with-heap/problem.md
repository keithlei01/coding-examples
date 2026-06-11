# 10 — Top K Largest Values (Heap)

## Context (LC #215 / #347 hybrid)

Return the **top k largest** values from an unsorted array (not just the single kth). Use a heap — same technique as kth largest, extended.

## Task

Implement `topKLargest(nums, k)`.

Return array of the **k largest** values, sorted **descending**. If `k >= nums.length`, return all sorted desc.

Use min-heap size k — **O(n log k)**.

## Example

```javascript
topKLargest([3, 1, 4, 1, 5, 9, 2], 3);
// [9, 5, 4]
```

Tie-break: when building final output, sort descending (values equal are interchangeable).

## LeetCode family

- [215](https://leetcode.com/problems/kth-largest-element-in-an-array/) — one value
- [347](https://leetcode.com/problems/top-k-frequent-elements/) — top k by frequency (different key)

**Medium**
