// <-- Simple frequency sort -->

/*
  In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

  solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
  -- We sort by highest frequency to lowest frequency.
  -- If two elements have same frequency, we sort by increasing value.
  More examples in test cases.
*/

// <-- My Solution -->
function solve(arr) {
  const dict = new Map();

  for (const value of arr) {
    dict.set(value, (dict.get(value) || 0) + 1);
  }

  return arr.sort((a, b) => {
    let n = dict.get(a);
    let m = dict.get(b);
    
    return n === m ? a - b : m - n;
  });
}

// <-- Best Solution -->
function solveBest(arr) {
  const res = {};

  for (const value of arr) {
    res[value] = res[value] + 1 || 1;
  }

  return arr.slice().sort((a, b) => res[b] - res[a] || a - b);
}
