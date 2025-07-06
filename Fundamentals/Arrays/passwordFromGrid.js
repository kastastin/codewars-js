// <-- Get Password from grid -->

/*
  In this kata you are expected to recover a scattered password in a (m x n) grid (you'll be given directions of all password pieces in the array)

  The array will contain pieces of the password to be recovered, you'll get directions on how to get all the the pieces, your initial position in the array will be the character "x".

  Heres what the array looks like

  [
    ["p", "x", "m"],
    ["a", "$", "$"],
    ["k", "i", "t"]
  ]
  
  The given directions would consist of [left, right, up, down] and [leftT, rightT, upT, downT], the former would be used to move around the grid while the latter would be used when you have a password to that direction of you.( E.g if you are in a position and the move to make is leftT it means theres a password to the left of you, so take the value and move there)

  So in the 2d array example above, you will be given the directions ["lefT", "downT", "rightT", "rightT"], making for the word "pa$$".

  Remember you initial position is the character "x".

  So you write the function getPassword(grid, directions) that uses the directions to get a password in the grid.

  Another example.

  grid = [
    ["a", "x", "c"],
    ["g", "l", "t"],
    ["o", "v", "e"]
  ];

  directions = ["downT", "down", "leftT", "rightT", "rightT", "upT"]

  getPassword(grid, directions) // => "lovet"
  Once again, Your initial position is the character "x", so from the position of "x" you follow the directions given and get all pieces in the grid.
*/

// <-- My Solution -->
function getPassword(grid, directions) {
  const controls = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1],
  };

  let password = "";

  for (let i = 0; i < grid.length; i++) {
    const curr = [i, grid[i].indexOf("x")];
    if (curr[1] > -1) break;
  }

  for (let i = 0; i < directions.length; i++) {
    const [dir, hasT] = directions[i].split("T");

    curr[0] += controls[dir][0];
    curr[1] += controls[dir][1];

    if (hasT != undefined) password += grid[curr[0]][curr[1]];
  }

  return password;
}

// <-- Best Solution -->
function getPasswordBest(grid, d) {
  let pass = "";

  let [r, c] = [
    (ind = grid.findIndex((v) => v.includes("x"))),
    grid[ind].indexOf("x"),
  ];

  for (let v of d) {
    if (v[0] === "d") r++;
    if (v[0] === "u") r--;
    if (v[0] === "r") c++;
    if (v[0] === "l") c--;
    if (v.slice(-1) === "T") pass += grid[r][c];
  }

  return pass;
}
