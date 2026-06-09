# 07 — Daily Advertiser Spend Cap

## Context (interview-style)

Ads teams enforce **daily spend caps** per advertiser so campaigns don’t blow through budget in one morning. You receive a stream of spend events (already authorized at the payment layer); your job is to **approve or reject** each event against the advertiser’s **calendar-day** cap in UTC.

You’re on CoderPad. Dates are provided as `"YYYY-MM-DD"` strings — no date math required.

## Task

```javascript
function processDailySpend(events, dailyCaps) {
  // events: { advertiserId, date, spendCents }[]  (processed in order)
  // dailyCaps: Map<advertiserId, dailyCapCents>
  // returns array of result objects (same length as events)
}
```

Each result:

```javascript
{
  advertiserId,
  date,
  spendCents,
  allowed: boolean,       // true if recorded against that day's total
  dailyTotalCents: number // running total for advertiser+date after this event
}
```

**Rules:**

- Track spend **per `(advertiserId, date)`** independently.
- If `currentDayTotal + spendCents <= dailyCap`, allow and add to the day total.
- If it would exceed the cap, **reject** — do not add; `dailyTotalCents` stays at the current total.
- Assume every `advertiserId` in `events` exists in `dailyCaps`.

## Example

```javascript
const caps = new Map([["A", 1000]]);
processDailySpend([
  { advertiserId: "A", date: "2024-01-01", spendCents: 400 },
  { advertiserId: "A", date: "2024-01-01", spendCents: 500 },
  { advertiserId: "A", date: "2024-01-01", spendCents: 200 },
], caps);
// → allowed totals: 400, 900, rejected at 900 (200 would exceed 1000)
```

## What they’re testing

- `Map` aggregation with composite key
- Integer money (`spendCents`) — no floats
- Business rule: partial reject, don’t overspend
- Not: timezone conversion (dates given), distributed locks

## Constraints

- Up to 200_000 events; caps up to $1M/day in cents.

## Follow-ups (verbal)

- Lifetime cap vs daily cap?
- Pacing: smooth spend across hours instead of hard daily wall?
- Refunds / credit events reducing daily total?
