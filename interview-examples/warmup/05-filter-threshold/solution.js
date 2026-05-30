/**
 * Classic: build a new array with a for-loop.
 */
function filterThreshold(records, min) {
  const result = [];

  for (let i = 0; i < records.length; i++) {
    if (records[i].value >= min) {
      result.push(records[i]);
    }
  }

  return result;
}

module.exports = { filterThreshold };
