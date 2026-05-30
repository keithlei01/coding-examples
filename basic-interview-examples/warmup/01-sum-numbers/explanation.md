# Explanation

Add each element to a running total. `reduce((s, n) => s + n, 0)` is the functional equivalent of an indexed `for` loop.

## Constraints

- `nums` contains only numbers (no coercion needed).
- Length ≤ 10_000.
- Empty array must return `0`.

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| Empty array `[]` | `0` | Initialize `sum = 0`; loop runs zero times |
| Negative numbers `[-2, 2]` | `0` | Addition works for signed values |
| Single element `[42]` | `42` | One iteration |
| Large array (≤ 10k) | Correct sum | O(n) single pass |

**Time:** O(n) · **Space:** O(1)

You will use the same pattern when summing revenue cents or units sold in later problems.
