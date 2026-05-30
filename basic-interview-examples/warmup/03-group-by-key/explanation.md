# Explanation

Initialize an empty array on first sight of each key, then `push` the record.

`Object.groupBy(records, r => r.region)` exists in modern JS — fine in interview if you mention browser/Node version.

**Time:** O(n) · **Space:** O(n)

This pattern appears before aggregating sums per group in easy/medium problems.
