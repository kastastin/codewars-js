// <-- Reverse FizzBuzz -->

/*
  FizzBuzz is often one of the first programming puzzles people learn. Now undo it with reverse FizzBuzz!

  Write a function that accepts a string, which will always be a valid section of FizzBuzz. Your function must return an array that contains the numbers in order to generate the given section of FizzBuzz.

  Notes:

  If the sequence can appear multiple times within FizzBuzz, return the numbers that generate the first instance of that sequence.
  All numbers in the sequence will be greater than zero.
  You will never receive an empty sequence.
  Examples
  "1 2 Fizz 4 Buzz"        -->  [1, 2, 3, 4, 5]
  "Fizz 688 689 FizzBuzz"  -->  [687, 688, 689, 690]
  "Fizz Buzz"              -->  [9, 10]
*/

// <-- My Solution -->
const reverseFizzBuzz = (s) => {
  const f = (a, b = 1) =>
    a.map((e, i, a) => {
      if (typeof e == "number") return e;
      if (typeof a[i + 1] == "number") return a[i + 1] + b;
      return e;
    });

  switch (s) {
    case "Fizz Buzz":
      return [9, 10];
    case "Buzz Fizz":
      return [5, 6];
    case "Fizz":
      return [3];
    case "Buzz":
      return [5];
    case "FizzBuzz":
      return [15];
    default:
      return f(
        f(
          f(
            f(
              s.split` `.map((a) => (isNaN(+a) ? a : +a)),
              -1,
            ).reverse(),
          ).reverse(),
          -1,
        ).reverse(),
      ).reverse();
  }
};

// <-- Best Solution -->
const reverseFizzBuzzBest = (str) => {
  switch (str) {
    case "Fizz":
      return [3];
    case "Buzz":
      return [5];
    case "FizzBuzz":
      return [15];
    case "Fizz Buzz":
      return [9, 10];
    case "Buzz Fizz":
      return [5, 6];
    default:
      return str.split` `.map(
        (val, idx, arr) =>
          +val ||
          +arr[idx - 2] + 2 ||
          +arr[idx - 1] + 1 ||
          +arr[idx + 1] - 1 ||
          +arr[idx + 2] - 2,
      );
  }
};
