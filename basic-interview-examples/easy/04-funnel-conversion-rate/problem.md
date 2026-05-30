# 04 — Funnel Conversion Rate

## Context

Product funnel steps: `["landing", "signup", "purchase"]` in order. You get an array of user journeys: each journey is an ordered list of steps **actually completed** (strict prefix of the funnel—users can't skip signup and still purchase in this simplified model).

## Task

For each adjacent pair of funnel steps, compute conversion rate:

`rate(step_i → step_{i+1}) = users_who_reached_step_{i+1} / users_who_reached_step_i`

A user "reached" step S if S appears in their journey (and thus all prior funnel steps must appear before S in the journey list).

Return array:

```javascript
[{ from: "landing", to: "signup", rate: 0.42 }, ...]
```

Rates are numbers in [0, 1], rounded to 4 decimal places.

## Example

```javascript
const journeys = [
  ["landing", "signup"],
  ["landing", "signup", "purchase"],
  ["landing"],
];
// landing: 3 users
// signup: 2 users  → landing→signup = 2/3
// purchase: 1 user → signup→purchase = 1/2
```

## Constraints

- Up to 100_000 journeys; funnel length ≤ 10.

## Follow-ups

- Funnel with optional steps?
- Time-to-convert (not just boolean reached)?
