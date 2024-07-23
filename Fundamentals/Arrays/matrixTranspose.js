// <-- Matrix Transpose -->

/*
  Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.

  For example, the transpose of:

  | 1 2 3 |
  | 4 5 6 |

  is

  | 1 4 |
  | 2 5 |
  | 3 6 |
  The input to your function will be an array of matrix rows. You can assume that each row has the same length, and that the height and width of the matrix are both positive.
*/

// <-- My Solution -->
function transpose(matrix) {
  const transpose = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!transpose[j]) transpose[j] = [];

      transpose[j].push(matrix[i][j]);
    }
  }

  return transpose;
}

// <-- Best Solution -->
const transposeBest = (m) => m[0].map((_, i) => m.map((r) => r[i]));
