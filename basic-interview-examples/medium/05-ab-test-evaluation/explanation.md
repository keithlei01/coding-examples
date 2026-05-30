# Explanation — A/B Test Conversion Evaluation

## Approach

Single pass to count `n` and conversions `x` per variant. Compute rates, lift, pooled two-proportion z-score, and significance at `|z| >= 1.96`.

## Constraints

- Up to 1_000_000 rows.
- Rates and lift rounded to **4 decimals**; `pooledZScore` to **3 decimals**.
- **Lift** = `(treatment - control) / control`; `null` if `controlRate === 0`.
- **Significant** iff `|z| >= 1.96` (two-sided α = 0.05).
- Formulas: `p = (x1+x2)/(n1+n2)`, `SE = sqrt(p(1-p)(1/n1+1/n2))`, `z = (p1-p2)/SE`.

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| Empty rows | Rates 0, lift null, z 0, not significant | Zero counts |
| Only one variant | Other rate 0 | z-test skipped if either n is 0 |
| `controlRate === 0` | `lift: null` | Guard after rounding control rate |
| `se === 0` | z stays 0, not significant | All same outcome in both arms |
| Unknown variant | Ignored | Skip rows not in control/treatment |
| Rounding order | Rates rounded before lift | Matches reference solution |

## Field interpretation

| Field | Meaning |
|-------|---------|
| `controlRate` | Baseline conversion rate |
| `treatmentRate` | Variant conversion rate |
| `lift` | Relative improvement vs control |
| `pooledZScore` | Standardized difference in proportions |
| `significant` | Passes α=0.05 two-sided threshold |

## IC5 discussion

- **SRM:** check assignment ratio before trusting z.
- **Peeking / sequential testing:** repeated looks inflate false positives.
- **Practical significance:** 0.1% lift may be significant at scale but not worth shipping.

## Limitations

Assumes independent Bernoulli trials; clustered users violate this. Mention CUPED, Bayesian, or sequential methods as follow-ups.

## Complexity

O(n) time, O(1) space.
