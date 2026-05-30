/**
 * Classic: object + for-loop + push.
 */
function groupByKey(records, key) {
  const groups = {};

  for (let i = 0; i < records.length; i++) {
    const record = records[i];
    const groupKey = record[key];

    if (groups[groupKey] === undefined) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(record);
  }

  return groups;
}

module.exports = { groupByKey };
