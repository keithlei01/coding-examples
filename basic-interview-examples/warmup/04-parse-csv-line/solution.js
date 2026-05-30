/**
 * Classic: split once, trim each field in separate steps.
 */
function parseCsvLine(line) {
  const parts = line.split(",");
  const name = parts[0].trim();
  const ageRaw = parts[1].trim();
  const city = parts[2].trim();

  const ageNumber = Number(ageRaw);
  const age = ageRaw !== "" && Number.isFinite(ageNumber) ? ageNumber : ageRaw;

  return { name: name, age: age, city: city };
}

module.exports = { parseCsvLine };
