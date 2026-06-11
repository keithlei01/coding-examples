# 18 — Remove Duplicates from Sorted IDs

## Context (LeetCode #26)

Sorted **transaction id** list has duplicates from retries. Compact in place: unique ids at the front, return count of uniques.

## Task

Implement `removeDuplicatesSortedIds(ids)`.

- `ids` sorted ascending
- Overwrite start of `ids` with unique values in order
- Return **count** of unique ids (first `count` elements are valid)

## Example

```javascript
const ids = [1, 1, 2, 2, 3];
removeDuplicatesSortedIds(ids); // returns 3
// ids starts with [1, 2, 3, ...]
```

## What they're testing

- Two pointers: `write` and `read`
- O(n) in place — same pointer family as merge

## LeetCode

[26 — Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) — **Easy**
