# Explanation — Daily Active Users

## Approach

1. Bucket events by UTC date string.
2. Use a `Set` per day for distinct `userId`.
3. Sort days lexicographically (`YYYY-MM-DD` sorts correctly).

## Why this fits Business Eng

DAU is a core health metric. The “coding” is grouping + deduplication—the same pattern as SQL `COUNT(DISTINCT user_id) GROUP BY date`.

## Edge cases

| Case | Behavior |
|------|----------|
| Empty input | `[]` |
| Same user many times in one day | Count once |
| Missing `userId` | In production, filter or quarantine bad rows |

## Complexity

- **Time:** O(n) over events; sorting k days is O(k log k), k ≤ n.
- **Space:** O(n) worst case (every event a unique user-day).

## Production notes

- **Time zones:** Product DAU is often “local calendar day per country.” Fix: attach `tz` to events or store `date_local` at ingest.
- **Scale:** MapReduce / Spark: `GROUP BY date, user_id` then `COUNT DISTINCT` or bitmap sketches for approximate DAU.

## IC5 talking points

- Define whether DAU is **any activity** vs **meaningful** action (login vs view).
- Mention data quality: bot traffic, test accounts excluded upstream.
