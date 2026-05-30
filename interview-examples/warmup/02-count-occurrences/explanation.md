# Explanation

`Map.get` returns `undefined` when missing — treat as `0`, then `set` with `count + 1`.

Alternative: plain object `{}`, but `Map` is clearer for arbitrary string keys.

**Time:** O(n) · **Space:** O(unique items)

Next step in interviews: turn this into “top region by count.”
