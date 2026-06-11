# Explanation — Remove Duplicates from Sorted IDs

`write` = next slot for a new unique value.  
`read` scans ahead.

When `ids[read] !== ids[write - 1]`, copy to `ids[write++]`.

Sorted input guarantees duplicates are adjacent.

**Time:** O(n) · **Space:** O(1)

Same two-pointer family as merge (#16, #17).
