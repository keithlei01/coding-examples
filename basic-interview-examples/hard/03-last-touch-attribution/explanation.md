# Explanation — Last-Touch Attribution

## Approach

1. Group touches by user, sort by time.
2. Per conversion, binary search latest touch with `timestamp < convTime`.
3. Aggregate revenue and conversion counts per channel.

## Why binary search

Linear scan works if conversions are sorted per user; binary search is safe for arbitrary conversion order—**O(log t)** per conversion.

## Business context

Last-touch is simplistic but common for **operational** channel reporting. IC5 candidates should contrast:

| Model | Use case |
|-------|----------|
| Last-touch | Simple dashboards, fast |
| Linear / Shapley | Budget mix optimization |
| Incrementality | Holdout/geo experiments—gold standard |

## Edge cases

- Touch exactly at conversion time: excluded (`<` not `<=`)—define with PM.
- Multiple conversions same user: each gets its own last-touch before that event.

## Complexity

O(T log T + C log T) for sorting touches and C conversions with binary search.
