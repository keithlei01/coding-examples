# 11 — Kth Largest in a Stream

## Context (LeetCode #703)

Metrics arrive live. After each new **latency sample**, report the current **kth largest** latency (1 = max).

Classic **stream + min-heap** — natural follow-up to “kth largest in array.”

## Task

Implement `KthLargestTracker`:

```javascript
class KthLargestTracker {
  constructor(k, initialSamples) {}
  /** Add sample; return kth largest after insert (1-indexed) */
  add(sample) {}
}
```

Use min-heap of size at most `k`.

## Example

```javascript
const t = new KthLargestTracker(3, [4, 5, 8, 2]);
t.add(3);  // stream [4,5,8,2,3] → top 3: 8,5,4 → returns 4
t.add(5);  // returns 5
t.add(10); // returns 5
t.add(9);  // returns 8
t.add(4);  // returns 8
```

## LeetCode

[703 — Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/) — labeled Easy on LC, but **stream + heap** pairs with #09 as **medium** practice.

## Follow-ups

- Memory bound when stream is infinite?
- Sliding window top-k (see hard/01)?
