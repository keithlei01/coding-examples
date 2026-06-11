# 16 — Merge Sorted Array In Place

## Context (LeetCode #88 — your interview question)

Two sorted **event timestamp** buffers must be merged into one sorted list. Buffer `A` already has empty slots at the end sized for `B`.

## Task

Implement `mergeSortedInPlace(A, m, B, n)`.

- `A`: length `m + n`; first `m` values sorted; last `n` slots are `0` (empty)
- `B`: length `n`, sorted
- Merge `B` into `A` **in place**, ascending
- Modify `A` only; return nothing (or return `A`)

## Example

```javascript
const A = [1, 3, 5, 0, 0, 0];
mergeSortedInPlace(A, 3, [2, 4, 6], 3);
// A becomes [1, 2, 3, 4, 5, 6]
```

## What they're testing

- Merge **from the end** (two pointers) — O(m + n), O(1) extra space
- Not: shift-from-front O(m×n)

## Constraints

- `0 <= m, n <= 10_000`

## LeetCode

[88 — Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) — **Easy**
