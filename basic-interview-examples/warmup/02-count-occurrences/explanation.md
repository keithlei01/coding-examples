# Explanation

Use `Map.get` / `set` with a default of 0, or build a plain object and convert to `Map` at the end.

## Constraints

- Items are strings only.
- Length ≤ 50_000.
- Return type must be a **`Map`**, not a plain object.

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| Empty array | Empty `Map` (size 0) | No iterations; return new `Map()` |
| Single item `["US"]` | `Map { "US" => 1 }` | First sighting sets count to 1 |
| Many repeats | Correct total per key | Increment on each sighting |
| Missing key lookup | `undefined` (or 0 before increment) | `map.get(key) ?? 0` pattern |

**Time:** O(n) · **Space:** O(unique keys)

This pattern appears before “top region by count” in easy problems.
