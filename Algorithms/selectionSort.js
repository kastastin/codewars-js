// <-- Selection sort -->
const nums = [10, 5, 95, 50, 25];
const sortedNums = selectionSort(nums);
console.log(`Unsorted array: ${nums}\nSorted array: ${sortedNums}`);

function selectionSort(unsortedArray) {
  const arr = unsortedArray.slice();

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }

    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }

  return arr;
}
