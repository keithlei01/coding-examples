/**
 * LeetCode #347 — Top K Frequent Elements (sort version). O(n + u log u).
 */
function topKFrequentErrors(logs, k) {
  const counts = new Map();

  for (const code of logs) {
    counts.set(code, (counts.get(code) || 0) + 1);
  }

  const all = [...counts.entries()].map(([code, count]) => ({ code, count }));

  all.sort((a, b) => {
    if (b.count !== a.count) return b.count - a.count;
    return a.code.localeCompare(b.code);
  });

  return all.slice(0, k);
}

module.exports = { topKFrequentErrors };
