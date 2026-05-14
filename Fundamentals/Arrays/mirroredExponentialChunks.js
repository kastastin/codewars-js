// <-- Mirrored Exponential Chunks -->

/*
  Using a single function provided with an array, create a new one in the following ways:

  Separate array elements into chunks. Each chunk will contain 2^abs(n) elements where n is the "distance" to the median chunk.
  The median chunk(s) will have one single element, or will not appear in the output if there is some ambiguity about it.
  If an outlying chunk does not have enough elements to reach the 2^abs(n) requirement, it will contain as many elements as remain.
  Chuncks in mirrored places (compared to the median chunk) should be of the same length.
  You must maintain original element order within each chunk.
  You must maintain original element order from chunk to chunk.

  Example Input/Solution:
  input:    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]
  solution: [[1,2,3,4,5,6,7,8],[9,10,11,12],[13,14],[15],[16,17],[18,19,20,21],[22,23,24,25,26,27,28,29]]
  Note: do it efficiently. Your function will have to be at most 2.5x slower than the reference solution.


*/

// <-- Solution -->
function mirroredExponentialChunks(arr) {
  const result = [];

  const midPosition = parseInt((arr.length - (arr.length & 1)) / 2, 10);
  const leftElements = arr.slice(0, midPosition);
  const rightElements = arr.slice(midPosition);

  if (arr.length & 1) {
    result.push([rightElements.shift()]);
  }

  let quantity = 2;
  while (leftElements.length > 0) {
    result.unshift(leftElements.splice(-quantity));
    result.push(rightElements.splice(0, quantity));
    quantity <<= 1;
  }

  return result;
}
