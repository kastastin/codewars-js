// <-- Strings Crossover -->

/*
  Define crossover operation over two equal-length strings A and B as follows:

  the result of that operation is a string of the same length as the input strings result[i] is chosen at random between A[i] and B[i].

  Given array of strings arr and a string result, find for how many pairs of strings from arr the result of the crossover operation over them may be equal to result.

  Note that (A, B) and (B, A) are the same pair. Also note that the pair cannot include the same element of the array twice (however, if there are two equal elements in the array, they can form a pair).

  Example
  For arr = ["abc", "aaa", "aba", "bab"] and result = "bbb", the output should be 2.

  "abc" and "bab" can crossover to "bbb"
  "aba" and "bab" can crossover to "bbb"
  Input/Output
  [input] string array arr

  A non-empty array of equal-length strings.

  Constraints: 2 ≤ arr.length ≤ 10, 1 ≤ arr[i].length ≤ 10.

  [input] string result

  A string of the same length as each of the arr elements.

  Constraints: result.length = arr[i].length.

  [output] an integer
*/

// <-- My Solution -->
function stringsCrossover(arr, result) {
  let count = 0;
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      let crossover = true;

      for (let k = 0; k < result.length; ++k) {
        if (arr[i][k] !== result[k] && arr[j][k] != result[k]) {
          crossover = false;
          break;
        }
      }

      count += crossover ? 1 : 0;
    }
  }
  return count;
}

// <-- Best Solution -->
function stringsCrossoverBest(arr, result) {
  const r = 0;
  for (let i in arr) {
    for (let j = arr.length - 1; j > i; j--) {
      if (
        result
          .split("")
          .every((e, k) => e == arr[i].charAt(k) || e == arr[j].charAt(k))
      )
        r++;
    }
  }
  return r;
}