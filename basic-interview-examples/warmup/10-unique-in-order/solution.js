/**
 * Classic: Set tracks first-seen values; filter keeps original order.
 */
function uniqueInOrder(arr) {
  const seen = new Set();

  return arr.filter((value) => {
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
}

module.exports = { uniqueInOrder };
