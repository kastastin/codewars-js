// <-- Find the Mine! -->

/*
  You've just discovered a square (NxN) field and you notice a warning sign. The sign states that there's a single bomb in the 2D grid-like field in front of you.

  Write a function that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.

  The location returned should be an array (Tuple<int, int> in C#, RAX:RDX in NASM) where the first element is the row index, and the second element is the column index of the bomb location (both should be 0 based). All 2D arrays passed into your function will be a square (NxN), and there will only be one mine in the array.

  Examples (Input --> Output)
  [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] --> [0, 0]
  [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] --> [1, 1]
  [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] --> [2, 1]
*/

// <-- My Solution -->
function mineLocation(field) {
  for (let i = 0, j, length = field.length; i < length; i++) {
    j = field[i].indexOf(1);

    if (j != -1) {
      return [i, j];
    }
  }
}

// <-- Best Solution -->
function mineLocationBest(field) {
  return ((idx) => [idx, field[idx].indexOf(1)])(field.findIndex((val) => val.includes(1)));
}
