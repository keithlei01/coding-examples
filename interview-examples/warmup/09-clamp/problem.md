# 09 — Clamp

Warm up guarding numeric bounds — budgets, bid caps, discount limits.

## Task

Implement `clamp(n, min, max)` so the result is never below `min` or above `max` (inclusive).

## Examples

```javascript
clamp(150, 0, 100); // 100
clamp(-5, 0, 100);  // 0
clamp(42, 0, 100);  // 42
```

## Constraints

- Assume `min <= max`.
