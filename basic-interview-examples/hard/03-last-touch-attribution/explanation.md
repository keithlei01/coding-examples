# Explanation — Last-Touch Attribution

## Approach

1. Group touches by user, sort by time.
2. Per conversion, binary search latest touch with `timestamp < convTime`.
3. Aggregate revenue and conversion counts per channel.

## Constraints

- Up to 200_000 touches and conversions.
- **Last-touch rule:** credit most recent touch with `touch.timestamp < conversion.timestamp` (strict `<`).
- No qualifying touch → credit **`"organic"`**.

## Edge cases and how we handle them

| Case | Expected | Handling |
|------|----------|----------|
| Touch exactly at conversion time | Excluded | Strict `<`, not `<=` |
| User with no touches | `"organic"` | Default channel |
| Multiple conversions per user | Each gets own last-touch | Per-conversion binary search |
| Empty inputs | `[]` | No conversions to aggregate |
| Channels with zero conversions | Omitted | Only credited channels appear |
| Output sort | Revenue desc, channel asc | Comparator on aggregate |

## Why binary search

Linear scan works if conversions are sorted per user; binary search is safe for arbitrary conversion order—**O(log t)** per conversion.

## Business context

Last-touch is simplistic but common for **operational** channel reporting. IC5 candidates should contrast:

| Model | Use case |
|-------|----------|
| Last-touch | Simple dashboards, fast |
| Linear / Shapley | Budget mix optimization |
| Incrementality | Holdout/geo experiments—gold standard |

## Complexity

O(T log T + C log T) for sorting touches and C conversions with binary search.
