function evaluateABTest(rows) {
  const stats = {
    control: { n: 0, x: 0 },
    treatment: { n: 0, x: 0 },
  };

  for (const { variant, converted } of rows) {
    const bucket = stats[variant];
    if (!bucket) continue;
    bucket.n++;
    bucket.x += converted ? 1 : 0;
  }

  const n1 = stats.control.n;
  const x1 = stats.control.x;
  const n2 = stats.treatment.n;
  const x2 = stats.treatment.x;

  const p1 = n1 === 0 ? 0 : x1 / n1;
  const p2 = n2 === 0 ? 0 : x2 / n2;

  const controlRate = round4(p1);
  const treatmentRate = round4(p2);
  const lift = controlRate === 0 ? null : round4((treatmentRate - controlRate) / controlRate);

  let pooledZScore = 0;
  let significant = false;

  if (n1 > 0 && n2 > 0) {
    const p = (x1 + x2) / (n1 + n2);
    const se = Math.sqrt(p * (1 - p) * (1 / n1 + 1 / n2));
    if (se > 0) {
      pooledZScore = round3((p1 - p2) / se);
      significant = Math.abs(pooledZScore) >= 1.96;
    }
  }

  return { controlRate, treatmentRate, lift, pooledZScore, significant };
}

function round4(v) {
  return Math.round(v * 10000) / 10000;
}

function round3(v) {
  return Math.round(v * 1000) / 1000;
}

module.exports = { evaluateABTest };
