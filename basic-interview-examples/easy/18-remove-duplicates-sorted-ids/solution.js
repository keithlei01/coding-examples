/** LeetCode #26 */
function removeDuplicatesSortedIds(ids) {
  if (ids.length === 0) return 0;

  let write = 1;
  for (let read = 1; read < ids.length; read++) {
    if (ids[read] !== ids[write - 1]) {
      ids[write++] = ids[read];
    }
  }
  return write;
}

module.exports = { removeDuplicatesSortedIds };
