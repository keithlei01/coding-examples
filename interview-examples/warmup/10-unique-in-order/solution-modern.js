/**
 * Modern: Set tracks what we have seen — O(n) instead of indexOf O(n²).
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
