# Explanation — Multi-Currency Revenue

## Approach

1. Index FX rates per currency, sorted by date.
2. Binary search **last rate with date ≤ txn date** (as-of join—standard finance).
3. Sum USD; track skipped for data quality.

## Constraints

- Up to 100_000 transactions, 10_000 FX rows.
- Use **nearest prior or same-day** rate per currency.
- No applicable rate → skip transaction, add `id` to `skipped`.
- Amounts are non-negative decimal **strings**; dates are sortable ISO strings.

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| No FX rate for currency/date | Skip txn | `lookupRate` returns null |
| Same-day rate | Allowed | `date <= txn.date` includes equal |
| Future rate only | Skip | Binary search finds nothing |
| Invalid/negative amount | Skip | `parseAmount` returns null |
| Empty inputs | `{ totalUsd: "0.00", byCurrency: [], skipped: [] }` | Zero totals |
| Zero amount | Included | Valid non-negative |
| `byCurrency` order | Sorted by currency asc | Explicit sort |

**Rounding note:** `totalUsd` rounds the grand sum; per-currency `usdTotal` rounds incrementally—they may differ by a penny. State your policy in an interview.

## Cleaner production implementation

Pre-sort transactions once; merge-sort walk with FX pointers per currency—O(n + m) without repeated binary search. Mention this optimization at IC5.

## Business topics

- **FX policy:** daily close vs intraday—material for ads revenue recognition.
- **Rounding:** per-txn vs per-batch—disclose which you choose.
- **skipped:** feed finance ops for manual correction.

## Pitfalls

- Using future rates (lookahead bias) in historical reports.
- Mixing currencies in `localTotal` without labeling.
