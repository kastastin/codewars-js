// <-- Madhav array -->

/*
  Write a method which defines an infinite sequence for a given rule, and allows use of the #take and #take_while methods (JS: take and takeWhile property) to get 'n' elements of the sequence, or all elements that match a condition.

  Example:

  sequence {|n| n}.take_while {|n| n < 10} => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  sequence {|n| (n * n)}.take(10) => [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
*/

// <-- My Solution -->
function sequence(fun) {
  const take = (n) => [...Array(n).keys()].map(fun),
    takeWhile = (b) => {
      let r = [];
      let i = -1;

      while (b(fun(++i))) r.push(fun(i));

      return r;
    };
  return { take, takeWhile };
}

// <-- Best Solution -->
function sequence(f) {
  return {
    take(n) {
      return Array(n)
        .fill(0)
        .map((_, i) => f(i));
    },

    takeWhile(p) {
      let i = 0,
        result = [];
      while (p(f(i))) result.push(f(i++));
      return result;
    },
  };
}
