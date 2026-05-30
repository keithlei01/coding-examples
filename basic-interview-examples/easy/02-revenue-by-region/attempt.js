/**
 * Implement revenueByRegion — see problem.md
 * Run: node attempt.js
 */
function revenueByRegion(lines) {
  // TODO: your code here
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
