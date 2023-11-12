// <-- Bubble sort -->
const nums = [10, 5, 95, 50, 25];
const sortedNums = bubbleSort(nums);
console.log(`Unsorted array: ${nums}\nSorted array: ${sortedNums}`);

function bubbleSort(unsortedArray) {
  const arr = unsortedArray.slice();

  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (swapped === false) break;
  }

  return arr;
}
