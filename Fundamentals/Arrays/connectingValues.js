// <-- Connecting Values -->

/*
  Given a two-dimensional array of non negative integers arr, a value val, and a coordinate coord in the form (row, column), return an iterable (depending on the language) of all of the coordinates that contain the given value and are connected to the original coordinate by the given value. Connections may be made horizontally, vertically, and diagonally. If the value of arr at coord is not equal to val, return an empty iterable. The coordinates must include the original coordinate and may be in any order.

  Examples:
  With the following array:
  [1,0,2,0,2,1]
  [1,0,2,1,5,7]
  [4,1,1,0,1,9]

  With val 1 and coord (0, 0), the output should contain (the order doesn't matter and the actual data structure depends on the language):
  [(2, 4), (2, 1), (0, 0), (2, 2), (1, 0), (1, 3)]

  With value 2 and coord (0,  2):
  [(0, 2), (1, 2)]

  With value 0 and coord (0, 0), the output should be empty.
*/

// <-- My Solution -->
function connectedValues(arr, val, coord) {
  const [a, b] = coord;

  if (arr[a][b] !== val) {
    return [];
  }

  const coors = {};
  const stack = [coord];

  while (stack.length) {
    [a, b] = stack.pop();

    for (let x = a - 1; x < a + 2; x++) {
      for (let y = b - 1; y < b + 2; y++) {
        if (arr[x] && !coors[[x, y]] && arr[x][y] === val) {
          coors[[x, y]] = [x, y];
          stack.push([x, y]);
        }
      }
    }
  }

  return Object.values(coors);
}

// <-- Best Solution -->
function connectedValues(ar, v, [x, y]) {
  if (ar[x][y] !== v) {
    return [];
  }

  const crumbs = { [`${x},${y}`]: true };
  
  const funkDoc = (x, y) =>
    [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
      [1, 1],
      [-1, -1],
      [1, -1],
      [-1, 1],
    ]
      .map((e) => [e[0] + x, e[1] + y])
      .filter((e) => ar[e[0]] && ar[e[0]][e[1]] === v && !crumbs[`${e[0]},${e[1]}`])
      .forEach((e) => ((crumbs[`${e[0]},${e[1]}`] = true), funkDoc(e[0], e[1])));

  funkDoc(x, y);

  return Object.keys(crumbs).map((e) => e.split(",").map((v) => Number(v)));
}
