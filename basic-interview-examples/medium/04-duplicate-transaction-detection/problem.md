# 04 — Duplicate Transaction Detection

## Context

Payment events: `{ txnId, userId, amountCents, timestamp }`. Flag **suspected duplicates**: two events with the **same** `userId` and `amountCents` where `|timestamp1 - timestamp2| <= windowSeconds` (default 300). Among a cluster of duplicates, only flag pairs—or return canonical **groups**.

## Task

Return groups of `txnId`s that are transitively connected by the duplicate rule (if A~B and B~C, one group {A,B,C}). Sort groups by smallest `txnId` lexicographically; within group sort txnIds ascending.

## Example

```javascript
const events = [
  { txnId: "t3", userId: "u1", amountCents: 100, timestamp: 1000 },
  { txnId: "t1", userId: "u1", amountCents: 100, timestamp: 1010 },
  { txnId: "t2", userId: "u1", amountCents: 100, timestamp: 1020 },
];
// t1-t2 and t2-t3 within 300s → one group ["t1","t2","t3"]
```

## Constraints

- Up to 50_000 events.

## Follow-ups

- Union by `txnId` only if amounts match—already in rule.
- Real-time stream with sliding window?
