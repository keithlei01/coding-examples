

// ["US,1000", "EU,500", "US,-200", "EU,500"] 
// => [{ region: "EU", revenue: 10 }, { region: "US", revenue: 8 }]
function revenueByRegion(lines) {

  const regionToRevMap = new Map();

  for (const line of lines) {
    [region, revRaw] = line.split(",");
    if (!region || !revRaw || !isValidRegion(region)) {
      continue;
    }

    region = region.trim();
    revRaw = revRaw.trim();

    let rev = Number(revRaw);
    if (!Number.isFinite(rev)) {
      continue;
    }

    rev = rev / 100;

    if (!regionToRevMap.has(region)) {
      regionToRevMap.set(region, { region: region, revenue: 0 });
    }

    regionToRevMap.set(region, { region: region, revenue: regionToRevMap.get(region).revenue + rev });
    // console.log(region + "," + rev);
  }

  return [...regionToRevMap.values()].sort((a, b) => {
    return a.revenue > b.revenue ? -1 : (
      a.revenue == b.revenue ? (a.region.localeCompare(b.region)) : 1);
  });
}

function isValidRegion(region) {
  return true;
}


// --- tests ---
console.log("example =>", revenueByRegion([
  "US,1000", "EU,500", "US,-200", "EU,500",
]));
// expected: [{ region: "EU", revenue: 10 }, { region: "US", revenue: 8 }]

console.log("invalid skipped =>", revenueByRegion(["US,1000", "bad", "EU,abc", ""]));
// expected: [{ region: "US", revenue: 10 }]

console.log("empty =>", revenueByRegion([])); // expected: []

console.log("tie-break =>", revenueByRegion(["B,500", "A,500"]));
// expected: [{ region: "A", revenue: 5 }, { region: "B", revenue: 5 }]

module.exports = { revenueByRegion };
