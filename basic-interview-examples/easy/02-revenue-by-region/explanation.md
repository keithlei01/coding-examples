# Explanation — Revenue by Region

## Approach

1. Parse each line defensively; skip malformed rows (common in log pipelines).
2. Accumulate integer **cents** per region to avoid floating-point drift.
3. Convert to dollars only at the end; round to 2 decimals for reporting.

## Constraints

- Up to 50_000 lines.
- Invalid lines (wrong format, non-numeric amount, empty region) are **skipped**.
- Amounts are integer **cents**; negative values represent refunds.

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| Empty `lines` | `[]` | No regions accumulated |
| All lines invalid | `[]` | Every line returns null from parser |
| Malformed line (`"bad"`, `"US,10,00"`) | Skipped | `parts.length !== 2` or non-finite cents |
| Empty region after trim | Skipped | `!region` check |
| Negative cents (refund) | Reduces regional total | Summed as-is in cents |
| Tie on revenue | `region` ascending | Secondary sort in comparator |
| Whitespace | Trimmed | `.trim()` on region and amount |

## Why cents matter

Finance and ads billing almost always store minor units as integers. Summing floats (`19.99 + 19.99`) causes penny drift; Business Eng interviews expect you to know this.

## Complexity

- **Time:** O(n + r log r) for n lines and r regions.
- **Space:** O(r).

## IC5 extensions

- Attach `transactionId` and dedupe in a `Set` before summing.
- Emit `skippedCount` for data quality SLAs.
- Multi-currency: don’t mix regions with different currencies without FX (see hard/02).
