/**
 * Classic: manual sign, dollars, cents, and padding.
 */
function centsToDollars(cents) {
  const isNegative = cents < 0;
  const absoluteCents = Math.abs(cents);

  const dollarsPart = Math.floor(absoluteCents / 100);
  const centsPart = absoluteCents % 100;

  let centsString = String(centsPart);
  if (centsPart < 10) {
    centsString = "0" + centsString;
  }

  const amount = dollarsPart + "." + centsString;

  if (isNegative) {
    return "-$" + amount;
  }
  return "$" + amount;
}

module.exports = { centsToDollars };
