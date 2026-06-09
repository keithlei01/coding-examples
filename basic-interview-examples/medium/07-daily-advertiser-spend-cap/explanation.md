# Explanation — Daily Advertiser Spend Cap

## Interview framing

Common **ads / billing** pattern: enforce budget without floating-point money. Interviewer cares about **correct accumulation**, **reject without overspending**, and **per-key isolation** (advertiser + day).

## Approach

1. `Map` keyed by `` `${advertiserId}|${date}` `` → running `dailyTotalCents`.
2. For each event, read cap from `dailyCaps.get(advertiserId)`.
3. If `current + spendCents > cap` → `allowed: false`, total unchanged.
4. Else update map and return `allowed: true`.

```javascript
const key = `${advertiserId}|${date}`;
const current = totals.get(key) || 0;
if (current + spendCents > cap) return { ..., allowed: false, dailyTotalCents: current };
```

## Edge cases

| Case | Handling |
|------|----------|
| Empty events | `[]` |
| Reject mid-day | Total frozen; later events still checked against same total |
| New calendar day | New map key → fresh budget |
| Two advertisers | Independent keys |
| Exact cap hit | `current + spend === cap` → allowed |

## Complexity

- **Time:** O(n) over events
- **Space:** O(distinct advertiser-day pairs)

## IC5 talking points

- **Pacing:** hard daily cap vs hourly budget curves for smoother delivery.
- **Refunds:** subtract from daily total or separate ledger?
- **Timezone:** advertiser local midnight vs UTC for “daily.”
- **Idempotency:** same charge event retried shouldn’t double-count (links to [08](../08-idempotency-key-deduper/)).

## Connection to this repo

- [easy/02-revenue-by-region](../../easy/02-revenue-by-region/) — cents aggregation
- [01-rolling-revenue-average](../01-rolling-revenue-average/) — calendar-day thinking
- [hard/04-campaign-budget-scheduling](../../hard/04-campaign-budget-scheduling/) — harder budget scheduling
