# 02 — Multi-Currency Revenue to USD

## Context

Transactions: `{ id, currency, amount, date }` where `amount` is decimal string in local currency. FX table: `{ currency, date, rateToUsd }` meaning `usd = amount * rate`.

Use **nearest prior or same-day** rate: for transaction date `D`, pick rate on max `{ date <= D }` for that currency. If none, exclude transaction from totals and list in `skipped`.

## Task

Return:

```javascript
{
  totalUsd: string,       // 2 decimal places
  byCurrency: [{ currency, localTotal, usdTotal }],
  skipped: [id, ...]
}
```

`localTotal` sums raw local amounts per currency (as numbers, 2 dp). Amounts non-negative.

## Constraints

- 100_000 transactions, 10_000 FX rows.

## Follow-ups

- ECB vs internal trader rates?
- Hedging not in scope.
