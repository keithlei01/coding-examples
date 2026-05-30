/**
 * Modern: Set for O(1) lookups.
 */
function findDuplicates(arr) {
  const seen = new Set();
  const reported = new Set();
  const result = [];

  for (const value of arr) {
    if (seen.has(value)) {
      if (!reported.has(value)) {
        reported.add(value);
        result.push(value);
      }
    } else {
      seen.add(value);
    }
  }

  return result;
}

module.exports = { findDuplicates };
