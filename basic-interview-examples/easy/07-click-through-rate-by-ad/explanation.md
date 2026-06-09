# Explanation — Click-Through Rate by Ad

## Approach

1. `Map<adId, { impressions, clicks }>` — count events by type.
2. Ignore unknown `eventType`.
3. Emit only ads with `impressions > 0`.
4. `ctr = round4(clicks / impressions)`; sort ctr desc, adId asc.

```javascript
if (eventType === "impression") row.impressions++;
else if (eventType === "click") row.clicks++;
```

## Edge cases

| Case | Handling |
|------|----------|
| Empty input | `[]` |
| Clicks only, no impressions | Omit ad |
| Zero clicks | `ctr: 0`, still include if impressions > 0 |
| Unknown event type | Ignored |
| Tie on ctr | `adId` ascending |

## Complexity

- **Time:** O(n + a log a) for n events, a ads
- **Space:** O(a)

## IC5 talking points

- **Definition:** CTR vs unique CTR (`COUNT(DISTINCT user_id)`).
- **Quality:** bot clicks, invalid impressions filtered upstream.
- **Funnel link:** impression → click → conversion ([04](../04-funnel-conversion-rate/)).

## Connection to this repo

- [04-funnel-conversion-rate](../04-funnel-conversion-rate/) — step conversion rates
- [06-ad-spend-by-campaign](../06-ad-spend-by-campaign/) — spend side of ads metrics
