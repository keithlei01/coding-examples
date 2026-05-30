# Explanation

Split on comma, trim each field, then coerce age with `Number`. Use **`Number.isFinite`** (not `isNaN`) so empty strings stay strings instead of becoming `0`.

## Constraints

- Exactly two commas (three fields: name, age, city).
- Trim whitespace around each field.
- Numeric age → number; non-numeric → string.
- No quoted commas or advanced CSV in scope.

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| Extra whitespace `" Alice , 30 , NYC "` | Trimmed fields | `.trim()` on each part |
| Numeric age `"30"` | `30` (number) | `Number.isFinite(Number("30"))` → true |
| Non-numeric age `"unknown"` | `"unknown"` (string) | Not finite → keep raw string |
| Empty age `""` | `""` (string) | `ageRaw !== ""` guard before numeric coercion |
| Whole dollars in name/city | Preserved as trimmed strings | No coercion on name/city |

**Pitfall:** `isNaN(Number(""))` is false (empty parses to 0). The solution checks `ageRaw !== ""` before coercing to a number.

**Time:** O(line length) · **Space:** O(1)

In production, use a real CSV parser for quoted fields and escaped commas.
