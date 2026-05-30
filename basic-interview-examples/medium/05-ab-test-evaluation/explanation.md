# Explanation — A/B Test Evaluation

## Approach

Single pass count conversions per variant, then apply **two-proportion z-test** (standard intro stats used in experimentation platforms).

## Interpretation for interviews

| Field | Meaning |
|-------|---------|
| `lift` | Relative uplift—exec-friendly |
| `significant` | Rule-of-thumb α=0.05; not a substitute for power analysis |

## IC5 must-mentions

- **Sample ratio mismatch (SRM):** check n1/n2 vs planned split.
- **Multiple comparisons:** Bonferroni or holdout hierarchy if many metrics.
- **Practical significance:** 0.01% lift significant at Meta scale but not worth shipping.
- **Guardrails:** latency, revenue—don't only optimize conversion boolean.

## Limitations (shows seniority)

- z-test assumes independent users; violates if network effects.
- Doesn't replace Bayesian or sequential methods for continuous monitoring.

## Complexity

O(n) time, O(1) space.
