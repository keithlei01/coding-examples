# 14 — Two-Sum Transaction Reconciliation

## Context (LeetCode #1 — business framing)

Finance reconciliation: given a list of transaction amounts (cents), find **two distinct entries** that sum to a target (e.g. a wire transfer total or chargeback pair).

Classic **Two Sum** — very common Meta phone screen warm-up, framed for Business Eng.

## Task

Implement `twoSumReconciliation(amountsCents, targetCents)`.

- `amountsCents`: integer array (positive or negative)
- Return `[i, j]` with `i < j` where `amountsCents[i] + amountsCents[j] === targetCents`
- If no pair exists, return `[]`
- **Exactly one valid pair** is guaranteed when a answer exists (interview simplification)

## Example

```javascript
twoSumReconciliation([200, 700, 1100, 1500], 900);
// [0, 1]  — 200 + 700 = 900
```

## What they're testing

- `Map` (value → index) in one pass — O(n)
- Not: nested loops O(n²)

## Constraints

- `2 <= amountsCents.length <= 10_000`
- Use integer cents (no float money)

## Follow-ups (verbal)

- What if multiple pairs? Return all? Smallest indices?
- Three-sum for bundled refunds?
- Stream too large for memory?
