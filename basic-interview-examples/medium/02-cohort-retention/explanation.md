# Explanation — Cohort Retention

## Approach

1. Assign each user’s cohort week = minimum observed `weekIndex`.
2. Track active weeks per user with a `Set`.
3. For each `(cohort, offset)`, count distinct users active in week `cohort + offset`.
4. Retention = active count / cohort size, rounded to 4 decimals.

## Constraints

- Up to 500_000 events, 50_000 users.
- Cohort week = user’s **first** (minimum) observed `weekIndex`.
- Active in week T = ≥1 event with `weekIndex === T`.
- Emit offsets `0..maxOffset` for each cohort with size > 0.
- Round retention to **4 decimals**.

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| Empty events | `[]` | No cohorts |
| Offset 0 | Retention 1.0 for active users | All cohort members active in cohort week by definition |
| Multiple events same user/week | Count once | `Set` per cell |
| Zero retention at offset | `retention: 0` | Still emit row (cohort size > 0) |
| `weekIndex < cohort` | Ignored for that user | Only offsets ≥ 0 valid |
| Example A,B cohort 0 | offset 0: 1.0, offset 1: 0.5 | A active week 1, B not |

## Why Sets per cell

Multiple events in the same user-week should not inflate the numerator. Sets also make deduplication O(1) per insert.

## Business framing

Cohort retention is the standard PMF / stickiness chart. IC5 candidates should define:

- **Active** = any event vs meaningful action.
- **Denominator** = cohort size at week 0, not current MAU.

## Complexity

O(events) to build cohorts + O(cohorts × maxOffset) to emit cells.

## IC5

Sketch warehouse SQL: `GROUP BY cohort_week, offset` with `COUNT(DISTINCT user_id)`.
