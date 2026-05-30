# Explanation

`Math.max(min, n)` floors at `min`; `Math.min(max, …)` caps at `max`.

Readable alternative:

```javascript
if (n < min) return min;
if (n > max) return max;
return n;
```

**Time:** O(1)

Used in coupon max discount and pacing logic in later exercises.
