// <-- Sum of numbers from 0 to N -->

/*
  We want to generate a function that computes the series starting from 0 and ending until the given number.

  Example:
  Input:
  > 6
  Output:
  0+1+2+3+4+5+6 = 21
*/

// <-- My Solution -->
var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    var sum = 0;
    var str = "";
    if (count === 0) {
      return "0=0";
    } else if (count < 0) {
      return count + "<0";
    } else {
      for (var i = 0; i < count; i++) {
        sum += i;
        str += i + "+";
      }
      sum += count;
      str += count + " = " + sum;
      return str;
    }
  };

  return SequenceSum;
})();

// <-- Best Solution -->
var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    return count > 0
      ? `${[...Array(count + 1).keys()].join("+")} = ${
          (count * (count + 1)) / 2
        }`
      : count
      ? count + "<0"
      : "0=0";
  };

  return SequenceSum;
})();
