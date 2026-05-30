
function parseCsvLine(line) {
  const [name, ageRaw, city] = line.split(",").map((token) => { return token.trim() });
  const age = Number(ageRaw);

  return { name, age: Number.isFinite(age) ? age : ageRaw, city };

  // const obj = {};

  // const tokens = line.split(",");

  // const ageRaw = tokens[1].trim();
  // const age = Number(ageRaw);

  // obj.name = tokens[0].trim();
  // obj.age = Number.isNaN(age) ? ageRaw : age;
  // obj.city = tokens[2].trim();

  // return obj;
}

// --- tests ---
console.log(parseCsvLine(" Alice , 30 , NYC "));
// expected: { name: "Alice", age: 30, city: "NYC" }

console.log(parseCsvLine("Bob,unknown,LA"));
// expected: { name: "Bob", age: "unknown", city: "LA" }

module.exports = { parseCsvLine };
