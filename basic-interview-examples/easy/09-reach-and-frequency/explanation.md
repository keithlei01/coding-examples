# Explanation — Reach and Frequency

## Approach

Per `campaignId`:

1. `Set<userId>` for **reach** (distinct users).
2. Counter for **impressions**.
3. `frequency = round2(impressions / reach)`.

New easy skill vs [07](../07-click-through-rate-by-ad/): **`Set` for deduplication** across users.

```javascript
usersByCampaign.get(campaignId).add(userId);
```

## Edge cases

| Case | Handling |
|------|----------|
| Same user many impressions | reach 1, impressions n |
| Invalid rows | Skipped |
| Sort | impressions desc, campaignId asc |

## Complexity

- **Time:** O(n + c log c)
- **Space:** O(n) for user sets worst case

## IC5 talking points

- Frequency caps in delivery ([medium/06](../../medium/06-sliding-window-rate-limiter/) per-user variant).
- Reach measurement vs cookie loss / modeled reach.
