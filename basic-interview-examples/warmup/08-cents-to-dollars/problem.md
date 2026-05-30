# 08 — Cents to Dollars

Warm up money display — interviews often use **integer cents** internally.

## Task

Implement `centsToDollars(cents)` where `cents` is an integer (can be negative).

Return a string with `$`, two decimal places, and a leading `-` before `$` when negative.

## Examples

```javascript
centsToDollars(1999);  // "$19.99"
centsToDollars(-50);   // "-$0.50"
centsToDollars(0);     // "$0.00"
centsToDollars(5);     // "$0.05"
```

## Constraints

- `|cents| ≤ 1_000_000_000`
