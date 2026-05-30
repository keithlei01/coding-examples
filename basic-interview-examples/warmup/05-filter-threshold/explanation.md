# Explanation

Keep records where `value >= min`. Equivalent to `Array.prototype.filter`; manual loop is fine in interviews.

## Constraints

- Each record has numeric `value`.
- Other fields must be preserved unchanged.
- Threshold is **inclusive** (`>=`, not `>`).

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| Empty `records` | `[]` | Return empty array |
| `value === min` | Included | `>=` comparison |
| No matches | `[]` | Nothing pushed to result |
| Output order | Same as input | Push in iteration order |
| Full record objects | Unmodified fields | Push entire record reference |

**Time:** O(n) · **Space:** O(output size)

For large log files, mention streaming filter without loading all rows into memory.
