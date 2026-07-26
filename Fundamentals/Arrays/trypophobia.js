// <-- Trypophobia -->

/*
  This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

  Task:
  Unfortunately, you have trypophobia, You always want to clear up some of the things that have occurred many times.

  Give you a number array(2D array) arr, remove the most common number in each subarray from that array.

  if more than one numbers have same repeat times, remove all of them.

  Example
  For a = [[3,3,3,3,3,3,3,3,3]], the output should be [[]]

  Because 3 is the most common number.

  For a = [[3,4,5],[4,4,4]], the output should be [[3,5],[]]

  Because 4 is the most common number. Remove all 4 from each subarray.

  For a = [[3,4,5],[3,4,5]], the output should be [[],[]]

  Because 3,4,5 is the most common numbers, they all repeated 2 times. Remove all of them from each subarray.
*/

// <-- Solution -->
function sc(a) {
  const d = {};

  for (let x of a) {
    for (let y of x) {
      d[y] = (d[y] || 0) + 1;
    }
  }

  const n = Math.max(...Object.values(d));

  return a.map((x) => x.filter((y) => d[y] < n));
}
