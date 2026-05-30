# Explanation

Bounds are **inclusive**. Equivalent forms: `Math.min(max, Math.max(min, n))` or explicit if/else checks.

## Constraints

- Result never below `min` or above `max` (inclusive).
- Assume `min <= max` (no swap or validation needed).

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| Above max | Returns `max` | `n > max` branch |
| Below min | Returns `min` | `n < min` branch |
| In range | Returns `n` unchanged | Neither branch fires |
| At boundary `n === min` or `n === max` | Unchanged | Inclusive — not clamped |
| `min === max` | Always that value | Degenerate range |

**Time:** O(1) · **Space:** O(1)

Used in coupon caps and ad pacing logic in later problems.
