// <-- Lucky Sevens -->

/*
  A "Lucky Seven" is the number seven surrounded by numbers that add up to form a perfect cube. The surrounding numbers will be described as the numbers directly above, below, and next to (not diagonally) the number 7. You will be given a 2D array containing at least 1 lucky seven. Your function should return the number of lucky sevens in the array.

  Here are some "Lucky Sevens" for example:

  [ [ 'x', 513, 'x', 'x', 'x' ],
    [ 82,   7,  32,  'x', 'x' ],
    [ 'x', 102, 'x', 'x', 'x' ],
    [ 'x', 'x', 'x', 'x', 'x' ],
    [ 'x', 'x', 'x', 'x', 'x' ] ]
    
  [ [ 'x', 'x', 'x', 'x', 'x' ],
    [ 'x', 'x', 'x', 'x', 'x' ],
    [ 'x', 'x', 'x', 'x', 'x' ],
    [ 'x', 'x', 'x', 'x',  9  ],
    [ 'x', 'x', 'x', 55,   7  ] ]
    
  [ [ 'x', 'x', 'x', 'x', 'x' ],
    [ 'x',  1,  'x', 'x', 'x' ],
    [  0,   7,   0,  'x', 'x' ],
    [ 'x',  0,  'x', 'x', 'x' ],
    [ 'x', 'x', 'x', 'x', 'x' ] ]
*/

// <-- Solution -->
function luckySevens(arr) {
  let lucky_count = 0;

  const get_val = (r, c) => (arr[r] && arr[r][c] ? arr[r][c] : 0);

  const get_neighbor_sum = (i, j) => get_val(i - 1, j) + get_val(i + 1, j) + get_val(i, j - 1) + get_val(i, j + 1);

  const is_cube = (n) => Number.isInteger(Math.cbrt(n));

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 7 && is_cube(get_neighbor_sum(i, j))) {
        lucky_count++;
      }
    }
  }

  return lucky_count;
}
