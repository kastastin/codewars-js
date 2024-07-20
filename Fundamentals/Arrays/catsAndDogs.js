// <-- Arrays of cats and dogs -->

/*
  Consider an array containing cats and dogs. Each dog can catch only one cat, but cannot catch a cat that is more than n elements away. Your task will be to return the maximum number of cats that can be caught.

  For example:

  solve(['D','C','C','D','C'], 2) = 2, because the dog at index 0 (D0) catches C1 and D3 catches C4. 
  solve(['C','C','D','D','C','D'], 2) = 3, because D2 catches C0, D3 catches C1 and D5 catches C4.
  solve(['C','C','D','D','C','D'], 1) = 2, because D2 catches C1, D3 catches C4. C0 cannot be caught because n == 1.
  solve(['D','C','D','D','C'], 1) = 2, too many dogs, so all cats get caught!
*/

// <-- My Solution -->
function solve(arr, n) {
  return arr.reduce((acc, curr, index) => {
    if (curr == "D")
      for (let i = index - n; i <= index + n; i++)
        if (arr[i] == "C") {
          arr[i] = 0;
          return ++acc;
        }
    return acc;
  }, 0);
}

// <-- Best Solution -->
function solveBest(arr, n) {
  const found = new Set();

  arr = arr.map((x, i) => [x, i]);

  for (let i = 0; i < arr.length; i++) {
    let left = Math.max(0, i - n);
    let right = Math.min(arr.length - 1, i + n);

    if (arr[i][0] == "D") {
      let n = arr
        .slice(left, right + 1)
        .find((x) => x[0] == "C" && !found.has(x[1]));
      if (n) found.add(n[1]);
    }
  }

  return found.size;
}
