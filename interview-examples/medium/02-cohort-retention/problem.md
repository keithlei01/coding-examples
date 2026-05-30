# 02 — Cohort Retention (Week 0 / Week N)

## Context

Events: `{ userId, weekIndex }` where `weekIndex` is integer weeks since a global epoch (e.g. product launch week = 0). A user's **cohort week** is their **first** observed `weekIndex` in the data.

## Task

Build retention table: for each cohort week `c`, and each offset `w` in `0..maxOffset`, compute:

`retention(c, w) = (users in cohort c active in week c+w) / (users in cohort c)`

“Active in week T” means user has at least one event with `weekIndex === T`.

Return sorted array:

```javascript
[
  { cohortWeek: 0, offset: 0, retention: 1.0 },
  { cohortWeek: 0, offset: 1, retention: 0.35 },
  ...
]
```

Round retention to 4 decimals. Only include offsets where cohort size > 0.

## Example

```javascript
// user A first seen week 0, also week 1
// user B first seen week 0, only week 0
// cohort 0 size 2, week 1 retention 1/2 = 0.5
```

## Constraints

- Up to 500_000 events, 50_000 users.

## Follow-ups

- Calendar cohorts (signup month)?
- Retention vs resurrection (churned user returns)?
