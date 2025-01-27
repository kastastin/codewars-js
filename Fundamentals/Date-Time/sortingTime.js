// <-- Sorting Time -->

/*
  A time period starting from "hh:mm" lasting until "hh:mm" is stored in an array:

  ["08:14", "11:34"]
  A set of different time periods is then stored in a 2D Array like so, each in its own sub-array:

  [["08:14","11:34"], ["08:16","08:18"], ["22:18","01:14"], ["09:30","10:32"], ["04:23","05:11"], ["11:48","13:48"], ["01:12","01:14"], ["01:13","08:15"]]
  Write a function that will take a 2D Array like the above as argument and return a 2D Array of the argument's sub-arrays sorted in ascending order.
*/

// <-- My Solution -->
function sortTime(arr) {
  const secondSorted = [];
  const firstSorted = arr.slice().sort((a, b) => a[0].localeCompare(b[0]));

  let find = "00:00";

  while (firstSorted.length > 0) {
    let firstValueIndex = firstSorted.findIndex((m) => m[0] >= find);

    if (firstValueIndex === -1) {
      find = "00:00";
      continue;
    }

    find = firstSorted[firstValueIndex][1];
    secondSorted.push(firstSorted.splice(firstValueIndex, 1)[0]);
  }

  return secondSorted;
}

// <-- Best Solution -->
function sortTimeBest([...arr]) {
  arr.sort((a, b) => a[0].localeCompare(b[0]));

  const result = [arr.shift()];

  while (arr.length) {
    const [, b0] = result[result.length - 1];
    let nextTimeIdx = arr.findIndex(([a]) => a >= b0);

    if (nextTimeIdx === -1) {
      nextTimeIdx = 0;
    }

    result.push(...arr.splice(nextTimeIdx, 1));
  }

  return result;
}
