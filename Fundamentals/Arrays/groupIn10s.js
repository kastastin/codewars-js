// <-- Group in 10s -->

/*
  Write a function groupIn10s which takes any number of arguments, groups them into tens, and sorts each group in ascending order.

  The return value should be an array of arrays, so that numbers between 0 and9 inclusive are in position 0, numbers between 10 and 19 are in position 1, etc.

  Here's an example of the required output:

  const grouped = groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50) 

  grouped[0]     // [3, 8]
  grouped[1]     // [12, 17, 19]
  grouped[2]     // [25]
  grouped[3]     // [35, 38]
  grouped[4]     // undefined
  grouped[5]     // [50]
*/

// <-- My Solution -->
function groupIn10s(...arr) {
  const grouped = [];

  const sortedArr = arr.toSorted((a, b) => a - b);

  const groupCount = Math.floor((sortedArr.at(-1) + 10) / 10); // [..., 54] -> 6
  const groupSizes = Array.from({ length: groupCount }, (_, i) => (i + 1) * 10); // [10, 20, ..., 60]

  for (const size of groupSizes) {
    const groups = Object.groupBy(sortedArr, (el) => el >= size);
    const otherElements = groups["false"];

    grouped.push(otherElements);
    sortedArr.splice(0, otherElements?.length ?? 0);
  }

  return grouped;
}

// <-- Best Solution -->
const groupIn10sBest = (...args) =>
  args
    .reduce((groups, v) => {
      let i = ~~(v / 10);
      groups[i] = (groups[i] || []).concat([v]);
      return groups;
    }, [])
    .map((group) => group.sort());
