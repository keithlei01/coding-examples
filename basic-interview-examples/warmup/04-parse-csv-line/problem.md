# 04 — Parse a CSV Line

Warm up string splitting — logs and exports often arrive as comma-separated text.

## Task

Implement `parseCsvLine(line)`.

For this exercise, every line has exactly three fields in order: **name, age, city** (no header row in the string).

- Trim whitespace around each field.
- If `age` is numeric, return it as a **number**; otherwise keep as string.

## Examples

```javascript
parseCsvLine(" Alice , 30 , NYC ");
// { name: "Alice", age: 30, city: "NYC" }

parseCsvLine("Bob,unknown,LA");
// { name: "Bob", age: "unknown", city: "LA" }
```

## Constraints

- Exactly two commas (three fields).
