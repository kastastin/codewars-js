// <-- Bitcoin statistics -->

/*
  Your friend Phil came up with a great new Bitcoin investment strategy, but before he can start making millions, he needs to know the minimum, average and maximum exchange rate for certain periods in the last few months.

  He'll pay you 0.5 Bitcoin for a function that takes several arrays (one for each period) and calculates the minimum, average and maximum for each array, as well as the total minimum, average and maximum. Some numbers at the start and end of each period don't agree with Phil's theory, so he wants you to discard them.

  For example, for the input

  discard = 2
  array 0 = 800,1200,2100,4100,1300,700 // discard 800,1200 at start and 1300,700 at end
  array 1 = 1000,1500,4500,5000,5800,2000,1500 // discard 1000,1500 at start and 2000,1500 at end
  your function should return

  array 0 = 2100,3100,4100 // min, avg, max for input array 0 (without discarded values)
  array 1 = 4500,5100,5800 // min, avg, max for input array 1 (without discarded values)
  array 2 = 2100,4300,5800 // total min, avg, max (without discarded values)
*/

// <-- My Solution -->
function getMinAvgMax(toDiscard, data) {
  let allElements = [];
  let totalMin = Infinity;
  let totalMax = -Infinity;

  const result = data.map((arr) => {
    const trimmedArr = arr.slice(toDiscard, arr.length - toDiscard);
    const min = Math.min(...trimmedArr);
    const max = Math.max(...trimmedArr);

    totalMin = Math.min(totalMin, min);
    totalMax = Math.max(totalMax, max);

    const avg = trimmedArr.reduce((acc, el) => acc + el, 0) / trimmedArr.length;
    allElements.push(...trimmedArr);

    return [min, avg, max];
  });

  const totalAvg =
    allElements.reduce((acc, el) => acc + el, 0) / allElements.length;

  result.push([totalMin, totalAvg, totalMax]);

  return result;
}

// <-- Best Solution -->
function getMinAvgMaxBest(k, a) {
  const t = a.map(
    (t) => (
      (t = t.slice(k, -k)),
      [Math.min(...t), t.reduce((a, c) => a + c, 0) / t.length, Math.max(...t)]
    )
  );

  return [
    ...t,
    [
      Math.min(...t.map((e) => e[0])),
      a.reduce((a, u) => a + u.slice(k, -k).reduce((a, c) => a + c, 0), 0) /
        a.reduce((a, c) => a + c.length - 2 * k, 0),
      Math.max(...t.map((e) => e[2])),
    ],
  ];
}
