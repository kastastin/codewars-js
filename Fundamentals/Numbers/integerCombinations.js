// <-- Sum of integer combinations -->

/*
  Consider the array [3,6,9,12]. If we generate all the combinations with repetition that sum to 12, we get 5 combinations: [12], [6,6], [3,9], [3,3,6], [3,3,3,3]. The length of the sub-arrays (such as [3,3,3,3] should be less than or equal to the length of the initial array ([3,6,9,12]).

  Given an array of positive integers and a number n, count all combinations with repetition of integers that sum to n. For example:

  find([3,6,9,12],12) = 5.
*/

// <-- My Solution -->
function find(arr, n) {
  let l = arr.length;
  let ans = 0;
  let stack = [[0, 0, 0]];

  while (stack.length) {
    let [idx, accum, num] = stack.pop();

    if (accum > n || num > l) {
      continue;
    } else if (accum === n) {
      ans++;
    } else {
      for (let j = idx; j < l; j++) stack.push([j, accum + arr[j], num + 1]);
    }
  }
  return ans;
}

// <-- Best Solution -->
function find(arr, n, depth = arr.length) {
  if (n == 0) return 1;

  if (depth == 0) return 0;

  return arr.reduce(
    (s, v, i) => s + find(arr.slice(0, i + 1), n - v, depth - 1),
    0,
  );
}
