// <-- Tick Toward -->

/*
  Define a function that generates medial values between two coordinates and returns them in an array from start to target. For example, if the starting point is [1,1] and the target point is [3,2] then the shortest route from start to target would be [[1,1], [2,2], [3,2]]. The route should go only through integral coordinates.

  Note: you should move diagonally until the path from your current position to the target can be represented as a fully horizontal/vertical line.

  Examples:
  tickToward([5,5],[5,7])  // => [[5,5],[5,6],[5,7]]
  tickToward([3,2],[4,5])  // => [[3,2],[4,3],[4,4],[4,5]]
  tickToward([5,1],[5,-2]) // => [[5,1],[5,0],[5,-1],[5,-2]]
*/

// <-- My Solution -->
function tickToward(start, end) {
  const arr = [start];

  let x = start[0];
  let y = start[1];

  while (x != end[0] || y != end[1]) {
    if (x < end[0]) x++;
    if (x > end[0]) x--;
    if (y < end[1]) y++;
    if (y > end[1]) y--;

    arr.push([x, y]);
  }

  return arr;
}

// <-- Best Solution -->
function tickToward(s, e) {
  const dx = Math.sign(e[0] - s[0]);
  const dy = Math.sign(e[1] - s[1]);

  return dx === 0 && dy === 0 ? [s] : [s, ...tickToward([s[0] + dx, s[1] + dy], e)];
}
