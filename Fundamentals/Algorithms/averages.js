// <-- Averages of numbers -->

/*
  Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

  Example:
  Input:  [ 1, 3, 5, 1, -10]
  Output:  [ 2, 4, 3, -4.5]
  If the array has 0 or 1 values or is null, your method should return an empty array.
*/

// <-- My Solution -->
function averages(numbers) {
  let result = [];
  if (!numbers) return result;

  for (let i = 1; i < numbers.length; i++)
    result.push((numbers[i - 1] + numbers[i]) / 2);

  return result;
}

// <-- Best Solution -->
function averagesBest(numbers) {
  return numbers
    ? numbers.slice(1).map((val, i) => (val + numbers[i]) / 2)
    : [];
}
