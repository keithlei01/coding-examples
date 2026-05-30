/**
 * DAU by UTC calendar day.
 * Time: O(n), Space: O(n) for distinct users per day.
 */
function dailyActiveUsers(events) {
  const dayToUsers = new Map();

  for (const { userId, timestamp } of events) {
    const date = utcDateString(timestamp);
    if (!dayToUsers.has(date)) dayToUsers.set(date, new Set());
    dayToUsers.get(date).add(userId);
  }

  return [...dayToUsers.entries()]
    .map(([date, users]) => ({ date, dau: users.size }))
    .sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
}

function utcDateString(unixSeconds) {
  const d = new Date(unixSeconds * 1000);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

module.exports = { dailyActiveUsers, utcDateString };
