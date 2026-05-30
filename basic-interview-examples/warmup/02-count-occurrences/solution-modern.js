/**
 * Modern: Map + for...of (or increment with ||= pattern).
 */
function countOccurrences(items) {
  const counts = new Map();

  for (const item of items) {
    counts.set(item, (counts.get(item) ?? 0) + 1);
  }

  return counts;
}

module.exports = { countOccurrences };
