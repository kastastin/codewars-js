// <-- Check Find a Bunch of Common Elements of Two Lists in a Certain Range -->

/*
  We are given two arrays of integers A and B and we have to output a sorted array with the integers that fulfill the following constraints:

  they are present in both ones

  they occur more than once in A and more than once in B

  their values are within a given range (inclusive)

  they are odd or even according as it is requested

  Example
  Given two arrays, a range, and a wanted parity:

  arrA = [1, -2, 7, 2, 1, 3, 7, 1, 0, 2, 3]
  arrB = [2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0]
  rng = [-4, 4] # is the range of the integers from -4 to 4 (inclusive)
  wanted = "odd"
  Process to obtain the result:

  0, 1, 2, 3, 7, are the numbers present in arrA and arrB
  1, 2, 3, 7,  occur twice or more in arrA and arrB
  1, 2, 3,  are in the range [-4, 4]
  1, 3, are odd
  output = [1, 3] 
  For the case:

  arrA = [1, -2, 7, 2, 1, 3, 4, 7, 1, 0, 2, 3, 0, 4]
  arrB = [0, 4, 2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0, 4]
  rng = [-4, 4]
  wanted = "even"
  output = [0, 2, 4] 
  If there are no elements that fulfill the constraints given above, the result will be an empty array.

  Features of the tests:

  Number of Random Tests = 300
  Length of the arrays A and B between 1000 and 10000
*/

// <-- My Solution -->
function findArr(arrA, arrB, rng, wanted) {
  const r = [],
    a = {},
    b = {},
    na = [],
    ok = wanted == "odd" ? 1 : 0;

  arrA.sort((a, b) => a - b);
  arrB.sort((a, b) => a - b);

  for (var i = 0; i < arrA.length; i++)
    if ((arrA[i] & 1) == ok) a[arrA[i]] = a[arrA[i]] ? a[arrA[i]] + 1 : 1;
  for (var i = 0; i < arrB.length; i++)
    if ((arrB[i] & 1) == ok) b[arrB[i]] = b[arrB[i]] ? b[arrB[i]] + 1 : 1;
  for (var k in a)
    if (a[k] > 1 && b[k] && b[k] > 1 && k >= rng[0] && k <= rng[1]) na.push(+k);

  return na.sort((a, b) => a - b);
}

// <-- Best Solution -->
function findArrBest(xs, ys, [from, to], p) {
  xs = xs.reduce((a, b) => ((a[b] = (a[b] || 0) + 1), a), {});
  ys = ys.reduce((a, b) => ((a[b] = (a[b] || 0) + 1), a), {});

  return Object.keys(xs)
    .filter(
      (k) =>
        xs[k] > 1 &&
        (ys[k] || 0) > 1 &&
        k >= from &&
        k <= to &&
        (p == "even") ^ (k & 1),
    )
    .map(Number)
    .sort((a, b) => a - b);
}
