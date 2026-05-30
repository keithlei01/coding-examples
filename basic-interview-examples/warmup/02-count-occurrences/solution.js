/**
 * Classic: plain object as a string-keyed map.
 */
function countOccurrences(items) {
  const counts = {};

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (counts[item] === undefined) {
      counts[item] = 1;
    } else {
      counts[item] = counts[item] + 1;
    }
  }

  // Problem asks for a Map — convert at the end.
  const result = new Map();
  for (const key in counts) {
    result.set(key, counts[key]);
  }
  return result;
}

module.exports = { countOccurrences };
