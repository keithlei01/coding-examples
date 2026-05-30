# 03 — Group By Key

Warm up grouping rows — same idea as SQL `GROUP BY`.

## Task

Implement `groupByKey(records, key)` where `records` is an array of objects and `key` is a field name string.

Return a plain object: each distinct `record[key]` → array of records with that value.

## Examples

```javascript
const rows = [
  { region: "US", amount: 10 },
  { region: "EU", amount: 5 },
  { region: "US", amount: 3 },
];

groupByKey(rows, "region");
// {
//   US: [{ region: "US", amount: 10 }, { region: "US", amount: 3 }],
//   EU: [{ region: "EU", amount: 5 }],
// }
```

## Constraints

- Every record has the `key` field.
- Up to 20_000 records.
