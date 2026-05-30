
function groupByKey(rows, key) {

  const grouped = {};
  for (const row of rows) {
    const region = row[key];
    if (!grouped[region]) {
      grouped[region] = [];
    }

    grouped[region].push(row);
  }
  return grouped;
}

// --- tests ---
const rows = [
  { region: "US", amount: 10 },
  { region: "EU", amount: 5 },
  { region: "US", amount: 3 },
];

const grouped = groupByKey(rows, "region");
console.log("US length =>", grouped?.US?.length); // expected: 2
console.log("EU length =>", grouped?.EU?.length); // expected: 1
console.log(JSON.stringify(grouped, null, 2));

module.exports = { groupByKey };
