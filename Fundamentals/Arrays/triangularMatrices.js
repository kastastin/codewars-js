// <-- Triangular matrices -->

/*
  A square matrix is considered upper-triangular if all the entries below the main diagonal are 0. Similarly, a square matrix is considered lower-triangular if all the entries above the main diagonal are 0.

  Given a square matrix of size n > 1, determine if it is upper triangular or lower triangular. The matrix (mat) is represented by a nested array of rows.

  Examples
  upperTriangular([[1,1,1],[0,1,1],[0,0,1]]) // => true
  upperTriangular([[0,0,0],[0,0,0],[1,0,0]]) // => false
  lowerTriangular([[1,0],[1,1]]) // => true
  lowerTriangular([[0,1],[0,0]]) // => false
*/

// <-- My Solution -->
function upperTriangular(mat) {
  for (let i = 1; i < mat.length; i++) {
    for (let j = 0; j < i; j++) {
      if (mat[i][j] != 0) {
        return false;
      }
    }
  }

  return true;
}

function lowerTriangular(mat) {
  for (let i = 0; i < mat.length - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (mat[i][j] != 0) {
        return false;
      }
    }
  }

  return true;
}

// <-- Best Solution -->
const lowerTriangular = (a) => a.every((e, i) => e.slice(i + 1).every((x) => x === 0));
const upperTriangular = (a) => a.every((e, i) => e.slice(0, i).every((x) => x === 0));
