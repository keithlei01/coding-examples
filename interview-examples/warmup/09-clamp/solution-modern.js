/**
 * Modern: Math.min / Math.max one-liner.
 */
function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

module.exports = { clamp };
