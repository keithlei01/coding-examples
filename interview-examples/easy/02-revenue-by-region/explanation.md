# Explanation — Revenue by Region

## Approach

1. Parse each line defensively; skip malformed rows (common in log pipelines).
2. Accumulate integer **cents** per region to avoid floating-point drift.
3. Convert to dollars only at the end; round to 2 decimals for reporting.

## Why cents matter

Finance and ads billing almost always store minor units as integers. Summing floats (`19.99 + 19.99`) causes penny drift; Business Eng interviews expect you to know this.

## Sorting tie-break

Descending revenue matches “top regions” dashboards; ascending `region` on ties gives stable, deterministic output for tests.

## Complexity

- **Time:** O(n + r log r) for n lines and r regions.
- **Space:** O(r).

## IC5 extensions

- Attach `transactionId` and dedupe in a `Set` before summing.
- Emit `skippedCount` for data quality SLAs.
- Multi-currency: don’t mix regions with different currencies without FX (see hard/02).
