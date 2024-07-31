// <-- Find the missed number -->

/*
  Here's a string with numbers from 1 - 21, its missing one number and the string is then shuffled, your'e expected to return a list of possible missing numbers.

  1, 21, "2198765123416171890101112131415"  => [ 12, 21 ]
  You won't be able to tell if its 21 or 12, you must return all possible values in an array.
*/

// <-- My Solution -->
const countString = (s) =>
  s.split("").reduce((s, v) => (s[v]++, s), Array(10).fill(0));

const findNumber = (start, stop, str) => {
  const countedStr = countString(str);
  const baseArray = Object.keys([...Array(stop + 1)]).slice(start);
  const countedBase = countString(baseArray.join(""));
  const countedDiff = countedBase.map((v, i) => v - countedStr[i]);

  return baseArray
    .filter((n) => countString(n).join("") === countedDiff.join(""))
    .map(Number);
};

// <-- Best Solution -->
function findNumberBest(a, b, s) {
  const ns = Array.from({ length: b - a + 1 }, (_, i) => a + i);
  const ds = Array.from(
    [].reduce.call(s, (ds, d) => ds.replace(d, ""), ns.join(""))
  )
    .sort()
    .join("");

  return ns.filter((n) => Array.from(`${n}`).sort().join("") === ds);
}
