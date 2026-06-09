/**
 * Implement reachAndFrequency — see problem.md
 * Run: node attempt.js
 */
function reachAndFrequency(events) {
  // TODO
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

// --- tests ---
console.log("example =>", reachAndFrequency([
  { userId: "u1", campaignId: "C1", eventType: "impression" },
  { userId: "u1", campaignId: "C1", eventType: "impression" },
  { userId: "u2", campaignId: "C1", eventType: "impression" },
]));
// expected: [{ campaignId: "C1", reach: 2, impressions: 3, frequency: 1.5 }]

console.log("empty =>", reachAndFrequency([])); // expected: []

console.log("two campaigns sort =>", reachAndFrequency([
  { userId: "u1", campaignId: "A", eventType: "impression" },
  { userId: "u1", campaignId: "B", eventType: "impression" },
  { userId: "u2", campaignId: "B", eventType: "impression" },
  { userId: "u3", campaignId: "B", eventType: "impression" },
]));
// expected: B first (3 impressions), then A (1)

console.log("skip invalid =>", reachAndFrequency([
  { userId: "", campaignId: "A", eventType: "impression" },
  { userId: "u1", campaignId: "A", eventType: "click" },
  { userId: "u1", campaignId: "A", eventType: "impression" },
]));
// expected: [{ campaignId: "A", reach: 1, impressions: 1, frequency: 1 }]

console.log("duplicate user counts once for reach =>", reachAndFrequency([
  { userId: "u1", campaignId: "X", eventType: "impression" },
  { userId: "u1", campaignId: "X", eventType: "impression" },
  { userId: "u1", campaignId: "X", eventType: "impression" },
]));
// expected: reach 1, impressions 3, frequency 3

module.exports = { reachAndFrequency, round2 };
