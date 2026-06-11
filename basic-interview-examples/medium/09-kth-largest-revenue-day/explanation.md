# Explanation — Kth Largest Revenue Day

## Min-heap of size k

Keep the **k largest** seen so far in a **min-heap**. The smallest of those k is the kth largest overall.

```javascript
for (const x of dailyCents) {
  heap.push(x);
  if (heap.size() > k) heap.pop(); // evict smallest in top-k
}
return heap.peek();
```

## Complexity

- **Time:** O(n log k)
- **Space:** O(k)

Not O(log n) total — that was a misstatement in the interview prompt.

## Alternatives (verbal)

- **Sort:** O(n log n)
- **Quickselect:** O(n) average

## Business framing

“Which was our 3rd best revenue day this quarter?” without sorting the full year.
