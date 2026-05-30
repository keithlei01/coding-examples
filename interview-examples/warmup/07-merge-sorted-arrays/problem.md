# 07 — Merge Sorted Arrays

Warm up **two pointers** — used in intervals, streams, and sorted merges.

## Task

Given two arrays sorted in **ascending** order, return a new merged sorted array.

## Examples

```javascript
mergeSorted([1, 3, 5], [2, 4, 6]); // [1, 2, 3, 4, 5, 6]
mergeSorted([], [1, 2]);           // [1, 2]
mergeSorted([2], [1]);             // [1, 2]
```

## Constraints

- Combined length ≤ 20_000.

## Hint

Do not concatenate and sort unless you discuss the O(n log n) trade-off — two pointers is O(n).
