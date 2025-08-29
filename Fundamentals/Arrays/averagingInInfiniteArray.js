// <-- Averaging in an Infinite Array -->

/*
  In an infinite array with two rows, the numbers in the top row are denoted

  . . . , A[−2], A[−1], A[0], A[1], A[2], . . .

  and the numbers in the bottom row are denoted

  . . . , B[−2], B[−1], B[0], B[1], B[2], . . .

  For each integer k, the entry A[k] is directly above the entry B[k] in the array, as shown:

  ...	|	A[-2]	|	A[-1]	|	A[0]	|	A[1]	|	A[2]	|	...
  ...	|	B[-2]	|	B[-1]	|	B[0]	|	B[1]	|	B[2]	|	...
  For each integer k, A[k] is the average of the entry to its left, the entry to its right, and the entry below it; similarly, each entry B[k] is the average of the entry to its left, the entry to its right, and the entry above it.

  Given A[0], A[1], A[2] and A[3], determine the value of A[n]. (Where range of n is -1000<n<1000)

  Test Cases are called as an array of ([A[0], A[1], A[2], A[3]], n)

  Hint: Calculate B[k]
*/

// <-- My Solution -->
function findA(A, n) {
  const B = [NaN],
    Bk = (k) => A[k] * 3n - (A[k - 1] + A[k + 1]),
    nB = (b = B.pop(), i = B.length) => B.push(b, b * 3n - A[i] - B[i - 1]),
    nA = (a = A.pop(), i = A.length) => A.push(a, a * 3n - B[i] - A[i - 1]),
    pB = () => ((B[0] = B[1] * 3n - A[1] - B[2]), B.unshift(NaN)),
    pA = () => A.unshift(A[0] * 3n - B[1] - A[1]);

  B.push(Bk(1), Bk(2));

  if (0 <= n && n < 4) return A[n];

  if (n < 0) {
    while (n++) pB(), pA();
    return A[0];
  }

  n -= 2;

  while (--n) {
    nB(), nA();
  }

  return A.pop();
}

// <-- Best Solution -->
function findABest([...arr], n) {
  n < 0 && arr.reverse() && (n = 3 - n);

  while (n--) {
    [arr[0], arr[1], arr[2], arr[3]] = [arr[1], arr[2], arr[3], 6n * arr[3] - 10n * arr[2] + 6n * arr[1] - arr[0]];
  }

  return arr[0];
}
