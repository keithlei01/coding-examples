# Explanation — Daily Active Users

## Approach

1. Bucket events by UTC date string.
2. Use a `Set` per day for distinct `userId`.
3. Sort days lexicographically (`YYYY-MM-DD` sorts correctly).

## Constraints

- `0 <= events.length <= 100_000`.
- Multiple events per user per day count **once** for DAU.
- Calendar day is **UTC**; `date` format `"YYYY-MM-DD"`.
- Only days with at least one event appear in output (no zero-fill).

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| Empty input | `[]` | No buckets → empty result |
| Same user many times in one day | DAU = 1 | `Set` dedupes per day |
| Same user on different days | Counted each day | Separate Set per date |
| Missing `userId` | Not in spec | In production, filter or quarantine bad rows |
| Invalid timestamp | Not in spec | Would produce invalid date bucket — validate at ingest in production |

## Why this fits Business Eng

DAU is a core health metric. The “coding” is grouping + deduplication—the same pattern as SQL `COUNT(DISTINCT user_id) GROUP BY date`.

## Complexity

- **Time:** O(n) over events; sorting k days is O(k log k), k ≤ n.
- **Space:** O(n) worst case (every event a unique user-day).

## Production notes

- **Time zones:** Product DAU is often “local calendar day per country.” Fix: attach `tz` to events or store `date_local` at ingest.
- **Scale:** MapReduce / Spark: `GROUP BY date, user_id` then `COUNT DISTINCT` or bitmap sketches for approximate DAU.

## IC5 talking points

- Define whether DAU is **any activity** vs **meaningful** action (login vs view).
- Mention data quality: bot traffic, test accounts excluded upstream.
