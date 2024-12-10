// <-- Number Zoo Patrol -->

/*
  Write a function that takes a shuffled list of unique numbers from 1 to n with one element missing (which can be any number including n). Return this missing number.

  Note: huge lists will be tested.

  Examples:
  [1, 3, 4]  =>  2
  [1, 2, 3]  =>  4
  [4, 2, 3]  =>  1
*/

// <-- My Solution -->
function findNumber(array) {
  const totalLength = array.length + 1;
  const totalSum = (totalLength * (totalLength + 1)) / 2;
  const currentSum = array.reduce((acc, num) => acc + num, 0);

  return totalSum - currentSum;
};

// <-- Best Solution -->
function findNumberBest(array) {
  const arr = array.reduce(
    (acc, value, index) => [acc[0] + value, acc[1] + index],
    [0, array.length * 2 + 1]
  );

  return arr[1] - arr[0];
}
