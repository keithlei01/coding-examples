# Explanation — CPC by Campaign

Mirror of [08-cpa-by-campaign](../08-cpa-by-campaign/) with **clicks** as denominator. If you solved 08, this is a quick transfer test.

## Approach

Two maps: `spendCents`, `clicks`. Emit only campaigns with `clicks > 0`. Sort CPC ascending.

## Complexity

O(n + c log c)

## IC5

Relate CPC to CTR and CPM: `CPM ≈ CPC × CTR × 1000` (verbal, approximate).
