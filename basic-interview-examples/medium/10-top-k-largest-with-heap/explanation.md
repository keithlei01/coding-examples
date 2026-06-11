# Explanation — Top K Largest with Heap

Same min-heap-size-k as [09](../09-kth-largest-revenue-day/). After the scan, heap holds the k largest; sort them descending for output.

Difference from easy [15-top-k-frequent-errors](../../easy/15-top-k-frequent-errors/): here values are **unsorted** and heap beats sort when k ≪ n.

## Drain heap note

`heap.a.sort((a,b) => b-a)` uses internal array — in interview, pop k times into result.

## Complexity

O(n log k + k log k)
