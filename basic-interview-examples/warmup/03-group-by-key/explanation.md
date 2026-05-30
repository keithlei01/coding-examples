# Explanation

Initialize an empty array on first sight of each key, then `push` the record. Preserves input order within each group.

`Object.groupBy(records, r => r.region)` exists in modern JS — fine in interview if you mention browser/Node version.

## Constraints

- Every record has the `key` field (no missing-field handling required).
- Up to 20_000 records.
- Return a plain object: `{ groupValue: [records...] }`.

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| Empty `records` | `{}` | Return empty object |
| Single record | One group with one element | Create array on first key |
| All same key | One group containing all records | All `push` to same array |
| Order within group | Matches input order | Sequential `push` preserves order |

**Time:** O(n) · **Space:** O(n)

This pattern appears before aggregating sums per group in easy/medium problems.
