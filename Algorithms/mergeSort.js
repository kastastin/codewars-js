// <-- Merge sort -->
const nums = [10, 5, 95, 50, 25];
const sortedNums = mergeSort(nums);
console.log(`Unsorted array: ${nums}\nSorted array: ${sortedNums}`);

function mergeSort(unsortedArray) {
  const arr = unsortedArray.slice();

  if (arr.length <= 1) return arr;

  // Split the array into 2 halves
  const middle = Math.floor(arr.length / 2),
    leftHalf = arr.slice(0, middle),
    rightHalf = arr.slice(middle);

  // Recursively sort each half
  const sortedLeft = mergeSort(leftHalf),
    sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [],
    leftIndex = 0,
    rightIndex = 0;

  // Compare elems and merge them in sorted array
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate the remaining elems from both array
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}
