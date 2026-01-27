// <-- Sum of prime-indexed elements -->

/*
  In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

  The first element of the array is at index 0.
*/

// <-- Solution -->
function total(arr) {
  let sum = 0;

  arr.filter((item, index) => {
    for (let i = 2; i < index; i++) {
      if (index % i == 0) {
        return;
      }
    }

    if (index != 0 && index != 1) {
      sum += item;
    }
  });

  return sum;
}
