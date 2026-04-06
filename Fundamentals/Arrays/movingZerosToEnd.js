// <-- Moving Zeros To The End -->

/*
  Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

  moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

// <-- Solution -->
function moveZeros(arr) {
  const filtedList = arr.filter((num) => num !== 0);
  const zeroList = arr.filter((num) => num === 0);

  return filtedList.concat(zeroList);
}
