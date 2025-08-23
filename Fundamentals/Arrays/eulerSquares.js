// <-- Euler Squares -->

/*
  Write a function that creates a Euler square for any odd positive integer n. Your function will be tested for odd n < 200.

  A Euler square (also called a Graeco-Latin square) is a pair of orthogonal latin squares. A latin square is an n × n array filled with the integers 1 to n each occurring once in each row and column - see Latin Squares. Two latin squares are orthogonal if each r between 1 and n in the 1st square is paired (i.e. occurs at the same position) exactly once with each s between 1 and n in the 2nd square.

  Example of Euler Square of size 3: 
  [[3,1,2],      [[3,2,1],
  [2,3,1],       [2,1,3],
  [1,2,3]],      [1,3,2]]

  Explanation:
  1 in the 1st square is paired with 2 in the first row of the 2nd square, with 3 in the second row, and with 1 in the third row.
  2 in the 1st square is paired in the 2nd square with 1 in the first row, 2 in the second row, and 3 in the third row.
  And 3 is paired with 3 in the first row, 1 in the second row, and 2 in the third row.

  If the 2nd square was a duplicate of the 1st, they would not be orthogonal, because each integer would be paired with itself three times.

  Example of Euler Square of size 5: 
  [[5, 2, 4, 1, 3],      [[5, 1, 2, 3, 4],
  [4, 1, 3, 5, 2],       [4, 5, 1, 2, 3],
  [3, 5, 2, 4, 1],       [3, 4, 5, 1, 2],
  [2, 4, 1, 3, 5],       [2, 3, 4, 5, 1],
  [1, 3, 5, 2, 4]]       [1, 2, 3, 4, 5]]
*/

// <-- My Solution -->
function createEulerSquare(n) {
  const a = [];
  const b = [];
  const r = Array(n)
    .fill()
    .map((_, i) => i + 1);

  for (let i = 0; i < n; i++) {
    r.unshift(r.pop());
    a.push(
      Array(n)
        .fill()
        .map((_, j) => (n + 2 * j - i) % n || n),
    );
    b.push([...r]);
  }

  return [a, b];
}

// <-- Best Solution -->
function createEulerSquareBest(n) {
  const a = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => ((i + j) % n) + 1));
  const b = a.map((t, i) => t.slice(i).concat(t.slice(0, i)));
  
  return [a, b];
}
