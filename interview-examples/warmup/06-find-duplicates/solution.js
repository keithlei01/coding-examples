/**
 * Classic: plain objects instead of Set.
 */
function findDuplicates(arr) {
  const seen = {};
  const alreadyReported = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (seen[value] === true) {
      if (alreadyReported[value] !== true) {
        alreadyReported[value] = true;
        result.push(value);
      }
    } else {
      seen[value] = true;
    }
  }

  return result;
}

module.exports = { findDuplicates };
