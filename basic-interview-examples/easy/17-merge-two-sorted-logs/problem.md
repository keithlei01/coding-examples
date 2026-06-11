# 17 — Merge Two Sorted Logs

## Context (LC #88 variant — return new array)

Two sorted arrays of **request latency** samples (ms) arrive from different shards. Merge into one sorted array (new array is fine).

Easier than #16: no in-place constraint.

## Task

Implement `mergeTwoSortedLogs(shardA, shardB)` → sorted array of all values.

## Example

```javascript
mergeTwoSortedLogs([1, 3, 8], [2, 4, 6]);
// [1, 2, 3, 4, 6, 8]
```

## What they're testing

- Classic two-pointer merge — O(n + m)
- Prerequisite before in-place #16

## LeetCode family

Merge pattern (also [warmup 07](../../warmup/07-merge-sorted-arrays/)) — **Easy**
