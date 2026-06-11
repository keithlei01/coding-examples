# Explanation — Kth Largest in a Stream

## Pattern

Same min-heap-size-k as [09](../09-kth-largest-revenue-day/), but **`add` is called many times**.

Constructor seeds heap from `initialSamples`, then each `add` pushes and maybe pops.

## Invariant

Heap always holds the **k largest** of all samples seen; min at root = kth largest.

## Complexity per `add`

O(log k) · Space O(k)

## Interview arc

1. Kth largest in array (#09) — batch
2. Stream (#11) — online
3. Top k frequent (#10 / easy 15) — different key (frequency vs magnitude)
