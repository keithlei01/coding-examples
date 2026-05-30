# 03 — Last-Touch Attribution

## Context

Marketing touchpoints: `{ userId, channel, timestamp }`. Conversions: `{ userId, revenueCents, timestamp }`.

**Last-touch rule:** credit the conversion to the **most recent** touchpoint for that user strictly **before** conversion time (`touch.timestamp < conversion.timestamp`). If none, attribute to `"organic"`.

## Task

Return `{ channel, conversions, revenueCents }` sorted by `revenueCents` descending, then `channel` ascending.

## Example

```javascript
touches = [
  { userId: "u1", channel: "email", timestamp: 10 },
  { userId: "u1", channel: "ads", timestamp: 20 },
];
conversions = [{ userId: "u1", revenueCents: 500, timestamp: 25 }];
// ads gets 500
```

## Constraints

- Up to 200_000 touches and conversions.

## Follow-ups

- Multi-touch fractional models?
- View-through windows?
