/**
 * Classic: two-index merge (same algorithm interviews expect).
 */
function mergeSorted(a, b) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      merged.push(a[i]);
      i = i + 1;
    } else {
      merged.push(b[j]);
      j = j + 1;
    }
  }

  while (i < a.length) {
    merged.push(a[i]);
    i = i + 1;
  }

  while (j < b.length) {
    merged.push(b[j]);
    j = j + 1;
  }

  return merged;
}

module.exports = { mergeSorted };
