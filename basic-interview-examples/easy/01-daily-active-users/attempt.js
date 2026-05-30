/**
 * Implement dailyActiveUsers — see problem.md
 * Run: node attempt.js
 */
function dailyActiveUsers(events) {
  // TODO: your code here
}

function utcDateString(unixSeconds) {
  // TODO: optional helper
}

// --- tests ---
console.log("example =>", dailyActiveUsers([
  { userId: "u1", timestamp: 1704067200 },
  { userId: "u2", timestamp: 1704067200 },
  { userId: "u1", timestamp: 1704153600 },
]));
// expected: [{ date: "2024-01-01", dau: 2 }, { date: "2024-01-02", dau: 1 }]

console.log("empty =>", dailyActiveUsers([])); // expected: []

console.log("duplicate user same day =>", dailyActiveUsers([
  { userId: "u1", timestamp: 1704067200 },
  { userId: "u1", timestamp: 1704067200 },
]));
// expected: [{ date: "2024-01-01", dau: 1 }]

module.exports = { dailyActiveUsers, utcDateString };
