/**
 * Modern: same two-pointer merge, tighter style with i++/j++.
 * (Concat + sort is O(n log n) — avoid in interviews.)
 */
function mergeSorted(a, b) {
  const out = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) out.push(a[i++]);
    else out.push(b[j++]);
  }

  return out.concat(a.slice(i)).concat(b.slice(j));
}

module.exports = { mergeSorted };
