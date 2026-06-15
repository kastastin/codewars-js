// <-- Minimum path in squares -->

/*
  You're given a square consisting of random numbers, like so:

  const square = [
      [1,2,3],
      [4,8,2],
      [1,5,3]];

  Your job is to calculate the minimum total cost when moving from the upper left corner to the coordinate given. You're only allowed to move right or down.

  In the above example the minimum path would be:

  const square = [
      [1,2,3],
      [_,_,2],
      [_,_,3]];

  Giving a total of 11. Start and end position are included.

  Note: Coordinates are marked as x horizontally and y vertically.
*/

// <-- Solution -->
function minPath(grid, x, y, saveGrid = []) {
  if (!saveGrid[y]) saveGrid[y] = [];
  if (x < 0) return Infinity;
  if (y < 0) return Infinity;
  if (x === 0 && y === 0) return grid[0][0];

  let total = 0;

  if (saveGrid[y][x] !== undefined) return saveGrid[y][x];

  total = grid[y][x] + Math.min(minPath(grid, x - 1, y, saveGrid), minPath(grid, x, y - 1, saveGrid));
  saveGrid[y][x] = total;

  return total;
}
