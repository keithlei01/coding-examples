# 09 — Reach and Frequency by Campaign

## Context (interview-style)

Media buyers watch **reach** (unique people) and **frequency** (avg impressions per person). High frequency can mean ad fatigue.

## Task

Implement `reachAndFrequency(events)`.

Input: `{ userId, campaignId, eventType: "impression" }[]`

For each campaign with at least one valid impression, return:

```javascript
{ campaignId, reach, impressions, frequency }
```

- `reach` = distinct `userId` count
- `impressions` = total impression events
- `frequency` = `impressions / reach`, rounded to **2** decimals
- Skip rows with empty `userId` or `campaignId`, or `eventType !== "impression"`

Sort by `impressions` **descending**, then `campaignId` **ascending**.

## Example

```javascript
reachAndFrequency([
  { userId: "u1", campaignId: "C1", eventType: "impression" },
  { userId: "u1", campaignId: "C1", eventType: "impression" },
  { userId: "u2", campaignId: "C1", eventType: "impression" },
]);
// reach 2, impressions 3, frequency 1.5
```

## Constraints

- Up to 200_000 events.

## Follow-ups (verbal)

- Frequency cap per user?
- Reach vs unique devices?
- Dedupe impressions within 1 second?
