// <-- Array intersect all -->

/*
  Write a function intersect that takes any number of array arguments. The function must return an array containing all the values that are present in every array argument.

  All arguments given will be arrays.
  The first argument determines the order of the returned values.
  Return an empty array for empty result set.
  Example

  ['dog', 'bar', 'foo']
  ['foo', 'bar', 'cat']
  ['gin', 'bar', 'foo']
        --->
  ['bar', 'foo']
*/

// <-- My Solution -->
function intersect() {
  if (!arguments.length) return [];

  const arr = Array.prototype.slice.call(arguments);

  return arr[0].filter((val) => arr.every((v) => v.indexOf(val) !== -1));
}

// <-- Best Solution -->
function intersectBest(arg, ...args) {
  return arg ? arg.filter((x) => args.every((arr) => arr.includes(x))) : [];
}
