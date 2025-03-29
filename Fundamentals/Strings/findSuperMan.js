// <-- Find SuperMan -->

/*
  For a given array of integers, construct a square matrix A with side length equal to the length of array, where A[i, j] is equal to the sum of all elements of the array with indexes between i and j, inclusive.

  Note that between i and j means a[i] + a[i + 1] + ... + a[j] for the case i ≤ j, and a[j] + a[j + 1] + ... + a[i] for the case i > j.

  Input/Output
  [input] integer array arr

  2 ≤ arr.length ≤ 10, 1 ≤ arr[i] ≤ 10.

  [output] 2D integer array

  Example
  For arrr = [1, 2, 3], the output should be

  [ [1, 3, 6], [3, 2, 5], [6, 5, 3] ]
*/

// <-- My Solution -->
const findSuperMan(s) {
  const check = (w) => {
    let p = 0;

    for (let c of w) {
      p = s.indexOf(c, p);

      if (p < 0) return false;

      p += 2;
    }

    return true;
  }

  s = s.toLowerCase();

  return check("superman") || check("namrepus")
    ? "Hi, SuperMan!"
    : "Are you crazy?";
}

// <-- Best Solution -->
function findSuperManBest(s){
  return /s.+u.+p.+e.+r.+m.+a.+n|n.+a.+m.+r.+e.+p.+u.+s/i.test(s) ? "Hi, SuperMan!" : "Are you crazy?";
}
