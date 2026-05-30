# 05 — Filter by Threshold

Warm up `filter` — common for “rows above minimum spend.”

## Task

Implement `filterThreshold(records, min)` returning only records where `record.value >= min`.

## Examples

```javascript
filterThreshold(
  [
    { id: 1, value: 8 },
    { id: 2, value: 3 },
    { id: 3, value: 5 },
  ],
  5
);
// [{ id: 1, value: 8 }, { id: 3, value: 5 }]
```

## Constraints

- Each record has numeric `value` and any other fields you should preserve.
