// <-- Identify the array's ordering -->

/*
  Write a function that takes a single array as an argument (containing multiple strings and/or positive numbers and/or arrays), and returns one of four possible string values, depending on the ordering of the lengths of the elements in the input array:

  Your function should return...

  “Increasing” - if the lengths of the elements increase from left to right (although it is possible that some neighbouring elements may also be equal in length)
  “Decreasing” - if the lengths of the elements decrease from left to right (although it is possible that some neighbouring elements may also be equal in length)
  “Unsorted” - if the lengths of the elements fluctuate from left to right
  “Constant” - if all element's lengths are the same.
  Numbers and Strings should be evaluated based on the number of characters or digits used to write them.

  Arrays should be evaluated based on the number of elements counted directly in the parent array (but not the number of elements contained in any sub-arrays).
*/

// <-- My Solution -->
function orderType(arr) {
  let inc = 1;
  let dec = 2;
  const len = (x) => x.length || ("" + x).length;

  for (let i = 1; i < arr.length; i++) {
    let diff = len(arr[i - 1]) - len(arr[i]);
    if (diff < 0) dec = 0;
    if (diff > 0) inc = 0;
  }

  return ["Unsorted", "Increasing", "Decreasing", "Constant"][inc + dec];
}
