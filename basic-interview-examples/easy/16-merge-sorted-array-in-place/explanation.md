# Explanation — Merge Sorted Array In Place

## Key insight

If you merge from the **front**, inserting into `A` shifts elements → O(m×n).  
Merge from the **back** into empty slots → O(m + n), O(1) space.

## Loop invariant

`k` is the next write index. Pick the larger of `A[i]` and `B[j]`.

## When `j < 0`

Remaining `A` elements are already in place.

## Interview line

> “Same as merging two sorted log streams when the destination buffer is pre-allocated.”
