// <-- Common array elements -->

/*
  Given three arrays of integers, return the sum of elements that are common in all three arrays.

  For example:

  common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
  common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
*/

// <-- Solution -->
function common(a, b, c) {
  const result = [];

  for (let i = 0; i < a.length; i++) {
    const temp = a[i];
    if (b.includes(temp) && c.includes(temp)) {
      b.splice(b.indexOf(temp), 1);
      c.splice(c.indexOf(temp), 1);
      result.push(temp);
    }
  }

  return result.reduce((x, y) => x + y, 0);
}
