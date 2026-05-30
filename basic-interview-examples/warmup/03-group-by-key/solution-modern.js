/**
 * Modern: Object.groupBy (ES2024) — Node 21+.
 * Fallback mentally: reduce(records, (g, r) => { ... }, {})
 */
function groupByKey(records, key) {
  return Object.groupBy(records, (record) => record[key]);
}

module.exports = { groupByKey };
