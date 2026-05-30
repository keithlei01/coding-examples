/**
 * Modern: destructuring + map(trim) + Number.isFinite.
 */
function parseCsvLine(line) {
  const [name, age, city] = line.split(",").map((part) => part.trim());
  const ageNum = Number(age);

  return {
    name,
    age: Number.isFinite(ageNum) ? ageNum : age,
    city,
  };
}

module.exports = { parseCsvLine };
