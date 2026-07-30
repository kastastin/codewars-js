// <-- groupBy -->

/*
  Array elements are separated into (non-empty) groups of equal elements.
  This equality can be according to the builtin === or according to a user-provided function, which gives the option of grouping elements that are not strictly equal but are equal in some attribute or property.

  Task
  Implement an Array method groupBy that returns an array of non-empty arrays of elements that are equal according to the optional comparing function.

  [].groupBy() equals []; there must be no empty groups in the output.
  The comparing function has the same signature as === : (Value,Value) => Boolean .
  Inputs must not be modified.
  The output is to be a new array of new arrays.
  The prototype method must not be enumerable.

  Examples
  [ 1,1,1 ].groupBy() => [ [1,1,1] ]
  [ 0,1,1,0,0,1 ].groupBy() => [ [0], [1,1], [0,0], [1] ]

  function eqOdd(m,n) { return m%2===n%2; }
  [ 1,3,2,2,4,1 ].groupBy(eqOdd) => [ [1,3], [2,2,4], [1] ]

  function eqSign(m,n) { return Math.sign(m)===Math.sign(n); }
  [ -2,-1,0,1,2,-2,-1,0,1,2 ].groupBy(eqSign) => [ [-2,-1], [0], [1,2], [-2,-1], [0], [1,2] ]

  function eqLength(s,t) { return s.length===t.length; }
  [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ].groupBy(eqLength) =>
    [ ["zero"], ["one","two"], ["three"], ["four","five"], ["six"], ["seven","eight"], ["nine"] ]
*/

// <-- Solution -->
Object.defineProperty(Array.prototype, "groupBy", {
  value: function (predicate = (a, b) => a === b) {
    let group, pre;

    return this.length <= 0
      ? []
      : this.slice(1).reduce(
          (res, cur) => (predicate(pre, (pre = cur)) ? group.push(cur) : res.push((group = [cur])), res),
          [(group = [(pre = this[0])])],
        );
  },
});
