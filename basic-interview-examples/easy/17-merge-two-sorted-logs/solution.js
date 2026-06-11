function mergeTwoSortedLogs(shardA, shardB) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < shardA.length && j < shardB.length) {
    if (shardA[i] <= shardB[j]) {
      result.push(shardA[i++]);
    } else {
      result.push(shardB[j++]);
    }
  }

  while (i < shardA.length) result.push(shardA[i++]);
  while (j < shardB.length) result.push(shardB[j++]);

  return result;
}

module.exports = { mergeTwoSortedLogs };
