# Explanation

- `seen` — every value encountered at least once.
- When you see a value already in `seen`, it is a duplicate; add to `result` only once (`reported` set).

**Time:** O(n) · **Space:** O(n)

Medium **duplicate-transaction** builds on this with time windows and Union-Find.
