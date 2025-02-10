// <-- Largest Number Arrangement -->

/*
  Create a function that takes a list of one or more non-negative integers, and arranges them such that they form the largest possible number.

  Examples:

  [4, 50, 8, 145] returns 8504145 (8-50-4-145)
  [4, 40, 7] returns 7440 (7-4-40)
  [4, 46, 7] returns 7464 (7-46-4)
  [5, 60, 299, 56] returns 60565299 (60-56-5-299)
  [5, 2, 1, 9, 50, 56] returns 95655021 (9-56-5-50-21)
*/

// <-- My Solution -->
const largestArrangement = (array) => {
  const sortedArray = array.sort((a, b) => {
    const num1 = String(a) + b;
    const num2 = String(b) + a;

    return Number(num2) - Number(num1);
  });

  return Number(sortedArray.join(""));
};

// <-- Best Solution -->
function largestArrangementBest(numbers) {
  return Number(numbers.sort((a, b) => "" + b + a - ("" + a + b)).join(""));
}
