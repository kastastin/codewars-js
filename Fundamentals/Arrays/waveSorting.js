// <-- Wave Sorting -->

/*
  A list of integers is sorted in “Wave” order if alternate items are not less than their immediate neighbors (thus the other alternate items are not greater than their immediate neighbors).

  Thus, the array [4, 1, 7, 5, 6, 2, 3] is in Wave order because 4 >= 1, then 1 <= 7, then 7 >= 5, then 5 <= 6, then 6 >= 2, and finally 2 <= 3.

  The wave-sorted lists has to begin with an element not less than the next, so [1, 4, 5, 3] is not sorted in Wave because 1 < 4

  Your task is to implement a function that takes a list of integers and sorts it into wave order in place; your function shouldn't return anything.


*/

// <-- My Solution -->
function waveSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i += 2) {
    if (i > 0 && arr[i - 1] > arr[i]) {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
    }

    if (i < n - 1 && arr[i] < arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
}

// <-- Best Solution -->
function waveSortBest(arr) {
  const t = arr.slice().sort((a, b) => a - b);

  arr.forEach((_, i) => (arr[i] = i % 2 ? t.shift() : t.pop()));
}
