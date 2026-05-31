
function dailyActiveUsers(events) {

  const dateToDauCountMap = new Map();

  events.map((event) => {
    const dateString = utcDateString(event.timestamp);
    if (!dateToDauCountMap.has(dateString)) {
      dateToDauCountMap.set(dateString, new Set());
    }
    const dauCount = dateToDauCountMap.get(dateString);
    dauCount.add(event.userId);
  });

  const result = [];
  for (const key of dateToDauCountMap.keys()) {
    result.push({ date: key, dau: dateToDauCountMap.get(key).size });
  }

  return result.sort((a, b) => { return a.date < b.date ? -1 : 1 });
}

function utcDateString(unixSeconds) {
  // TODO: optional helper
  return new Date(unixSeconds * 1000).toISOString().split('T')[0];
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
