// <-- Build Tower -->

/*
  Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

  For example, a tower with 3 floors looks like this:

  [
    "  *  ",
    " *** ", 
    "*****"
  ]
  And a tower with 6 floors looks like this:

  [
    "     *     ", 
    "    ***    ", 
    "   *****   ", 
    "  *******  ", 
    " ********* ", 
    "***********"
  ]
*/

// <-- My Solution -->
function towerBuilder(nFloors) {
  const tower = Array(nFloors);

  for (let floor = 0; floor < nFloors; floor++) {
    const air = " ".repeat(nFloors - floor - 1);
    const blocks = "*".repeat(2 * floor + 1);

    tower[floor] = air + blocks + air;
  }

  return tower;
}

// <-- Best Solution -->
function towerBuilder(n) {
  return [...Array(n)].map((_, i) => " ".repeat(n - 1 - i) + "*".repeat(i * 2 + 1) + " ".repeat(n - 1 - i));
}
