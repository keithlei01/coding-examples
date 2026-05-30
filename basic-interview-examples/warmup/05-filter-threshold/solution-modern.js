/**
 * Modern: Array.filter.
 */
function filterThreshold(records, min) {
  return records.filter((record) => record.value >= min);
}

module.exports = { filterThreshold };
