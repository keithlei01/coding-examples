# Explanation

1. `split(",")` then `trim()` each part.
2. `Number(age)` — use `Number.isFinite` to avoid treating `"30 "` as NaN incorrectly after trim.

Production parsers also handle quoted commas (`"Last, First",30,NYC`) — mention that if asked.

**Time:** O(length of line) · **Space:** O(1) extra

Feeds into easy **revenue-by-region** style parsing.
