// <-- Pair Wise -->

/*
  Given an array arr and a number n. Call a pair of numbers from the array a Perfect Pair if their sum is equal to n.

  Find all of the perfect pairs and return the sum of their indices.
  Note that any element of the array can only be counted in one Perfect Pair. If there are multiple correct answers, return the smallest one.

  Example
  For arr = [1, 4, 2, 3, 0, 5] and n = 7, the result should be 11.
  Since the Perfect Pairs are (4, 3) and (2, 5) with indices 1 + 3 + 2 + 5 = 11.
  For arr = [1, 3, 2, 4] and n = 4, the result should be 1.
  Since the element at index 0 (i.e. 1) and the element at index 1 (i.e. 3) form the only Perfect Pair.
*/

// <-- My Solution -->
function pairwise(arr, n) {
  const indices = new Set();

  let idxSum = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (!indices.has(i)) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === n && !indices.has(i) && !indices.has(j)) {
          idxSum += i + j;
          indices.add(i);
          indices.add(j);
          break;
        }
      }
    }
  }

  return idxSum;
}

// <-- Best Solution -->
function pairwise(arr, n) {
  return arr.reduce((acc, curr, i) => {
    const index = arr.indexOf(n - curr, i + 1);

    if (index !== -1) {
      arr[index] = undefined;
      acc += i + index;
    }

    return acc;
  }, 0);
}
