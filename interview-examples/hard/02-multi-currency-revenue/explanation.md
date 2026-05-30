# Explanation — Multi-Currency Revenue

## Approach

1. Index FX rates per currency, sorted by date.
2. Binary search **last rate with date ≤ txn date** (as-of join—standard finance).
3. Sum USD; track skipped for data quality.

## Cleaner production implementation

Pre-sort transactions once; merge-sort walk with FX pointers per currency—O(n + m) without repeated binary search. Mention this optimization at IC5.

## Simplification in reference solution

`byCurrency.usdTotal` recomputes for clarity; in interview, accumulate in one pass.

## Business topics

- **FX policy:** daily close vs intraday—material for ads revenue recognition.
- **Rounding:** per-txn vs per-batch—disclose which you choose.
- **skipped:** feed finance ops for manual correction.

## Pitfalls

- Using future rates (lookahead bias) in historical reports.
- Mixing currencies in `localTotal` without labeling.
