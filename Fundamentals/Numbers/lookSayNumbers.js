// <-- Look and say numbers -->

/*
          1
         11
         21
        1211
       111221
       312211
      13112221
     1113213211
          .
          .
          .
  Starting with "1" the following lines are produced by "saying what you see", so that line two is "one one", line three is "two one(s)", line four is "one two one one".

  Write a function that given a starting value as a string, returns the appropriate sequence as a list. The starting value can have any number of digits. The termination condition is a defined by the maximum number of iterations, also supplied as an argument.
*/

// <-- My Solution -->
function lookAndSay(data, len) {
  function next(token) {
    return "" + token.length + token[0];
  }

  function process() {
    return (data = data
      .match(/(\d)\1*/g)
      .map(next)
      .join(""));
  }

  return Array.apply(0, Array(len)).map(process);
}

// <-- Best Solution -->
function lookAndSayBest(data, len) {
  return Array.from(
    Array(len),
    () => (data = data.replace(/(.)\1*/g, (v) => v.length + v[0])),
  );
}
