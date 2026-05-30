/**
 * Implement findDuplicateGroups — see problem.md
 * Run: node attempt.js
 */
function findDuplicateGroups(events, windowSeconds = 300) {
  // TODO: your code here
}

const events = [
  { txnId: "t3", userId: "u1", amountCents: 100, timestamp: 1000 },
  { txnId: "t1", userId: "u1", amountCents: 100, timestamp: 1010 },
  { txnId: "t2", userId: "u1", amountCents: 100, timestamp: 1020 },
];
console.log("transitive chain =>", findDuplicateGroups(events));
// expected: [["t1", "t2", "t3"]]

console.log("empty =>", findDuplicateGroups([])); // expected: []

console.log("different amounts =>", findDuplicateGroups([
  { txnId: "t1", userId: "u1", amountCents: 100, timestamp: 1000 },
  { txnId: "t2", userId: "u1", amountCents: 200, timestamp: 1005 },
]));
// expected: []

console.log("outside window =>", findDuplicateGroups([
  { txnId: "t1", userId: "u1", amountCents: 100, timestamp: 1000 },
  { txnId: "t2", userId: "u1", amountCents: 100, timestamp: 2000 },
], 300));
// expected: []

module.exports = { findDuplicateGroups };
