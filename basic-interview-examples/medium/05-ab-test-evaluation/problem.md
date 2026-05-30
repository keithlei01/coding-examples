# 05 — A/B Test Conversion Evaluation

## Context

An experiment assigns users to `control` or `treatment`. You receive rows `{ variant, converted }` where `converted` is 0/1.

## Task

Implement `evaluateABTest(rows)` returning:

```javascript
{
  controlRate,
  treatmentRate,
  lift,           // (treatment - control) / control, null if controlRate === 0
  pooledZScore,   // two-proportion z-test statistic
  significant,    // |z| >= 1.96 for two-sided alpha 0.05
}
```

Round rates and lift to 4 decimals; `pooledZScore` to 3 decimals.

**Pooled proportion:** `p = (x1 + x2) / (n1 + n2)`  
**SE:** `sqrt(p * (1-p) * (1/n1 + 1/n2))`  
**z:** `(p1 - p2) / SE`

## Example

```javascript
// control: 100/1000 = 0.1, treatment: 120/1000 = 0.12 → lift 0.2, likely significant
```

## Constraints

- Up to 1_000_000 rows.

## Follow-ups

- Sequential testing / peeking bias?
- CUPED variance reduction?
