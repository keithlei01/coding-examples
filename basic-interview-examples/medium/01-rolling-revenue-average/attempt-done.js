/**
 * Implement rolling7DayAverage — see problem.md
 * addDays / round2 are provided (interview helpers) — focus on window logic.
 * Run: node attempt.js
 */

// --- provided on CoderPad (given; do not spend time reimplementing) ---
function addDays(isoDate, delta) {
  const [y, m, d] = isoDate.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() + delta);
  const yy = dt.getUTCFullYear();
  const mm = String(dt.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(dt.getUTCDate()).padStart(2, "0");
  return `${yy}-${mm}-${dd}`;
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

// --- your implementation ---
function rolling7DayAverage(data) {
  // 1. sort the data by date
  // 2. insert to date to rev map
  // 3. for date, get rev for past 7 day and calc avg
  let sorted = [...data].sort((a, b) => a.date.localeCompare(b.date));
  const dateToRev = new Map();
  for (let i = 0; i < data.length; i++) {
    dateToRev.set(data[i].date, data[i].revenueCents);
  }

  const result = [];

  const n = 7;
  for (let i = 0; i < data.length; i++) {
    let d = data[i].date;
    let sum = 0;
    for (let j = 0; j < 7; j++) {
      if (dateToRev.has(addDays(d, -j))) {
        let temp = dateToRev.get(addDays(d, -j));
        sum += temp;
      }
    }

    result.push({ date: d, rollingAvgDollars: round2(sum / 7.0 / 100.0) });
  }

  return result;
}

// --- tests ---
const data = [
  { date: "2024-01-01", revenueCents: 700 },
  { date: "2024-01-07", revenueCents: 700 },
];
console.log("rolling7DayAverage(example) =>", rolling7DayAverage(data));
// expected: [{ date: "2024-01-01", rollingAvgDollars: 1 }, { date: "2024-01-07", rollingAvgDollars: 2 }]

console.log("empty =>", rolling7DayAverage([])); // expected: []

console.log("sparse gap =>", rolling7DayAverage([
  { date: "2024-01-01", revenueCents: 700 },
  { date: "2024-01-08", revenueCents: 700 },
]));
// expected: [{ date: "2024-01-01", rollingAvgDollars: 1 }, { date: "2024-01-08", rollingAvgDollars: 1 }]
// Jan 8 window is Jan 2–8 only (Jan 1 is outside) → 700 / 7 = $1.00

module.exports = { rolling7DayAverage };
