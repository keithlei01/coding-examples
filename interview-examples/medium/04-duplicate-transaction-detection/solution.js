function findDuplicateGroups(events, windowSeconds = 300) {
  const byKey = new Map();

  for (const e of events) {
    const key = `${e.userId}|${e.amountCents}`;
    if (!byKey.has(key)) byKey.set(key, []);
    byKey.get(key).push(e);
  }

  const parent = new Map();

  function find(id) {
    if (!parent.has(id)) parent.set(id, id);
    if (parent.get(id) !== id) parent.set(id, find(parent.get(id)));
    return parent.get(id);
  }

  function unite(a, b) {
    const ra = find(a);
    const rb = find(b);
    if (ra !== rb) parent.set(ra, rb);
  }

  for (const list of byKey.values()) {
    list.sort((a, b) => a.timestamp - b.timestamp);
    let left = 0;
    for (let right = 0; right < list.length; right++) {
      while (list[right].timestamp - list[left].timestamp > windowSeconds) {
        left++;
      }
      for (let i = left; i < right; i++) {
        unite(list[i].txnId, list[right].txnId);
      }
    }
  }

  const groups = new Map();
  for (const e of events) {
    const root = find(e.txnId);
    if (!groups.has(root)) groups.set(root, []);
    groups.get(root).push(e.txnId);
  }

  const multi = [...groups.values()].filter((g) => g.length > 1);
  multi.forEach((g) => g.sort());
  multi.sort((a, b) => a[0].localeCompare(b[0]));

  return multi;
}

module.exports = { findDuplicateGroups };
