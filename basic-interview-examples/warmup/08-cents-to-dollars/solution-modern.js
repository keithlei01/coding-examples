/**
 * Modern: toFixed for 2 decimal places.
 */
function centsToDollars(cents) {
  const negative = cents < 0;
  const formatted = (Math.abs(cents) / 100).toFixed(2);
  return negative ? `-$${formatted}` : `$${formatted}`;
}

module.exports = { centsToDollars };
