/**
 * Implement processDailySpend — see problem.md
 * Run: node attempt.js
 */
function processDailySpend(events, dailyCaps) {
  // TODO
}

// --- tests ---
const capsA = new Map([["A", 1000]]);

console.log("example =>", processDailySpend([
  { advertiserId: "A", date: "2024-01-01", spendCents: 400 },
  { advertiserId: "A", date: "2024-01-01", spendCents: 500 },
  { advertiserId: "A", date: "2024-01-01", spendCents: 200 },
], capsA));
// expected: allowed true,true,false — daily totals 400, 900, 900

console.log("new day resets =>", processDailySpend([
  { advertiserId: "A", date: "2024-01-01", spendCents: 900 },
  { advertiserId: "A", date: "2024-01-02", spendCents: 500 },
], capsA));
// expected: both allowed — totals 900, 500

console.log("two advertisers =>", processDailySpend([
  { advertiserId: "A", date: "2024-01-01", spendCents: 800 },
  { advertiserId: "B", date: "2024-01-01", spendCents: 800 },
], new Map([["A", 1000], ["B", 500]])));
// expected: A allowed (800), B rejected (cap 500)

console.log("empty =>", processDailySpend([], new Map())); // expected: []

module.exports = { processDailySpend };
