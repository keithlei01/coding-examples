# 06 — Find Duplicates

Warm up `Set` for “have we seen this before?”

## Task

Implement `findDuplicates(arr)` returning values that appear **more than once**, in order of **first time you discover the value is a duplicate**.

## Examples

```javascript
findDuplicates([1, 2, 2, 3, 1, 4]); // [2, 1]
findDuplicates([1, 2, 3]);          // []
findDuplicates(["a", "a"]);         // ["a"]
```

## Constraints

- Array length ≤ 20_000.
- Values can be numbers or strings.
