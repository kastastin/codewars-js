// <-- Duplicates Everywhere -->

/*
  You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters, e.g.

  {
    "1": ["A", "B", "C"],
    "2": ["A", "B", "D", "A"],
  }
  Create a function that returns a table with the same keys, but each character should appear only once among the value-arrays, e.g.

  {
    "1": ["C"],
    "2": ["A", "B", "D"],
  }
  
  Rules:
  Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character. That's why in the example above the array under the key "2" contains "A" and "B", as 2 > 1.
  If duplicate characters are found in the same array, the first occurance should be kept.
*/

// <-- My Solution -->
function removeDuplicateIds(obj) {
  let unique = [];

  for (const key of Object.keys(obj).reverse()) {
    obj[key] = [...new Set(obj[key])].filter((el) => unique.indexOf(el) < 0);
    unique = unique.concat(obj[key]);
  }

  return obj;
}

// <-- Best Solution -->
function removeDuplicateIdsBest(obj) {
  const unq = new Set();
  const ret = {};

  Object.keys(obj)
    .reverse()
    .forEach((k) => {
      ret[k] = [];

      obj[k].forEach((v) => {
        if (!unq.has(v)) {
          ret[k].push(v);
          unq.add(v);
        }
      });
    });

  return ret;
}
