// <-- Subset Sum -->

/*
  Given a possibly empty list of strictly positive numbers and a non-negative target number, return either a subset of the list summing to the target, or null or a similar empty value if no such subset exists.

  The subset must consist of unique ( by index ) list elements.
  If a particular value occurs more than once in the input list, you can use it up to as many times as it occurs.
  The empty subset sums to 0.
  If multiple valid subsets exist, return any one of them.

  The target will never be much bigger than the sum of the input list, and often quite a bit smaller.
*/

// <-- Solution -->
function subsetSum(xs, target) {
  if (target === 0) {
    return [];
  }

  const seen = new Map([[0, null]]);

  for (const x of xs) {
    for (const sum of [...seen.keys()]) {
      const next = sum + x;

      if (seen.has(next)) continue;

      seen.set(next, [sum, x]);

      if (next === target) {
        const subset = [];

        for (let s = target; s; ) {
          const [prev, value] = seen.get(s);

          subset.push(value);
          s = prev;
        }

        return subset;
      }
    }
  }

  return null;
}
