# 15 — Top K Frequent Error Codes

## Context (LeetCode #347 — business framing)

On-call triage: from a server log snippet, return the **top K most frequent error codes** to prioritize fixes.

Classic **Top K Frequent Elements** — popular Meta/LeetCode problem with a metrics/logs wrapper.

## Task

Implement `topKFrequentErrors(logs, k)`.

- `logs`: `string[]` — each entry is an error code (e.g. `"TIMEOUT"`, `"RATE_LIMIT"`)
- Return array of `{ code, count }` length ≤ k

Sort rules:

1. `count` **descending**
2. `code` **ascending** (lexicographic) for ties

## Example

```javascript
topKFrequentErrors(["TIMEOUT", "OK", "TIMEOUT", "FAIL", "TIMEOUT", "FAIL"], 2);
// [
//   { code: "TIMEOUT", count: 3 },
//   { code: "FAIL", count: 2 },
// ]
```

## What they're testing

- Frequency map (`Map` or object)
- Sort + `slice(0, k)` — bucket sort is a verbal follow-up, not required here

## Constraints

- `1 <= k <= number of distinct codes`
- Up to 100_000 log lines

## Follow-ups (verbal)

- Heap O(n log k) when k is small?
- Streaming logs — approximate top K (Count-Min sketch)?
- Filter `"OK"` before counting?
