# 02 — Count Occurrences

Warm up `Map` for frequency counts (used everywhere in metrics).

## Task

Implement `countOccurrences(items)` returning a **`Map`** from each value → how many times it appears.

## Examples

```javascript
countOccurrences(["US", "EU", "US", "US"]);
// Map { "US" => 3, "EU" => 1 }

countOccurrences([]); // Map {}
```

## Constraints

- Items are strings (regions, channels, etc.).
- Length ≤ 50_000.
