# Explanation

Work on absolute value for dollars/cents split. Zero-pad the cents part to two digits. Put the negative sign **before** `$`.

## Constraints

- `cents` is an integer (can be negative).
- `|cents| ≤ 1_000_000_000`.
- Format: `$` + two decimal places (e.g. `"$19.99"`).
- Negative amounts: `"-$0.50"` (minus before dollar sign).

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| Zero | `"$0.00"` | `Math.abs(0)` → dollars 0, cents `"00"` |
| Negative `-50` | `"-$0.50"` | Sign prefix + abs value |
| Sub-dollar `5` | `"$0.05"` | Zero-pad cents when `< 10` |
| Whole dollars `1999` | `"$19.99"` | Integer division for dollars, mod for cents |
| Large values | Correct formatting within bound | No float math — integer ops only |

**Time:** O(1) · **Space:** O(1)

Never accumulate money as floats in production — always integer cents.
