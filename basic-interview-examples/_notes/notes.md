# JS

basic
- use const or let, avoid var
  - const for [], Map, Set, object {} - can modify contents but no reassign e.g. arr[0] = 1 - OK, arr = [] - failed
    - result = result.filter(...) will reassign, use let instead of const
  - let - block scope
  - var - function scope

array
- arr.length instead of arr.size

Interview usefulness (for your prep)
 | Method | How often | Typical use in your repo | 
 | - | - | - | 
 | filter | ⭐⭐⭐ Very common | Keep rows where value >= min, valid lines | 
 | reduce | ⭐⭐⭐ Very common | Sum, count frequencies, group/aggregate | 
 | map | ⭐⭐⭐ Very common | Transform output shape (not covered yet but same tier) | 
 | slice | ⭐⭐ Common | Top-k: sorted.slice(0, k) | 
 | for...of + Map | ⭐⭐⭐ Very common | Count occurrences, DAU buckets | 
 | splice | ⭐ Rare | In-place remove/insert — almost never in metrics problems | 

Most interview code looks like:
// filter — keep what matches
const valid = lines.filter(line => parseLine(line) !== null);

// reduce — sum or count
const sum = nums.reduce((acc, n) => acc + n, 0);

// or plain loop (totally fine, often clearer)
const map = new Map();
for (const item of items) {
  map.set(item, (map.get(item) || 0) + 1);
}


reduce - fold array into one value
  - arr.reduce((sum, n) => sum + n, 0);
  - arr.reduce((max, n) => (n > max? n : max), arr[0]);
  - items.reduce((counts, item) => {  
  counts[item] = (counts[item] || 0) + 1;  
  return counts;  
  }, {});


[Not often used] splice - remove/add items in place and return the removed items
- arr.splice(start, deleteCount, ...itemsToInsert);
  - arr = ["a", "b", "c", "d"];
  - arr.splice(1, 2, "x", "y", "z");  // ["a", "d", "x", "y", "z"] and returns ["b", "c"]

for 
- for (const x in items) - mainly object keys and array indices (rarely)
  - const counts = { US: 3, EU: 1 };
  for (const key in counts) console.log(key, counts[key]);  // ✅
  for (const val of counts) ...  // ❌ objects aren't iterable with for...of
- for (const x of items) - arrays, strings, map, set
  - const items = ["US", "EU"];
  for (const x of items) console.log(x);  // "US", "EU"     ✅
  for (const x in items) console.log(x);  // "0", "1"       ❌ for arrays

data conversions
| Conversion           | Code                          |
| -------------------- | ----------------------------- |
| {} → Map             | new Map(Object.entries(obj))  |
| Map → {}             | Object.fromEntries(map)       |
| Map → array of pairs | [...map] or Array.from(map)   |
| array of pairs → Map | new Map([["a", 1], ["b", 2]]) |


