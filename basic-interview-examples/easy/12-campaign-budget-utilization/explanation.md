# Explanation — Campaign Budget Utilization

## New skill vs 06–10

**External config map** (`budgets`) drives output rows — you emit every budgeted campaign, even at 0% spend. Percentage math instead of simple ratio sort.

## Approach

1. Sum spend only for campaigns in `budgets`.
2. Loop `budgets` (not spend map) to build output.
3. `utilizationPct = round2(spendDollars / budgetDollars * 100)`.

## Edge cases

| Case | Handling |
|------|----------|
| No spend events | All campaigns 0% |
| Over budget | utilization > 100 |
| Spend for unbudgeted campaign | Ignored |
| budgetDollars 0 | utilization 0 (guard) |

## IC5

Hard-stop delivery at 100% vs allow overrun and invoice later.
