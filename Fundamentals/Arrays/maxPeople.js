// <-- Max number of people and year in a specific place -->

/*
  As a historian, you wonder how many people ever lived in a specific area.

  Given an amount of records as an array/vector/list of arrays/pairs/tuples representing the year of arrival/birth and departure/death from a given area, your task is to write a function that returns the maximum for that area and the year in which said maximum was achieved.

  If more years have that maximum, just return the first one of them.

  If you have both people entering and exiting the territory in the same year, consider that all new comers arrived/were born before anyone left/died for the sake of computing when the maximum was achieved

  You will always be given at least one record of beginning/ending of a presence on the territory in valid format (ie: the first value will be lesser than or equal to the second).

  yearMaxPeople([[1978, 1978], [1969, 1998]]) === [2, 1978]
  yearMaxPeople([[1980, 2010], [1979, 1985], [1986, 1995], [1987, 2008]]) === [3, 1987]
  yearMaxPeople([[1980, 2010], [1979, 1986], [1986, 1995], [1987, 2008]]) === [3, 1986]
*/

// <-- Solution -->
function yearMaxPeople(a) {
  const d = {};

  for (let [x, y] of a) {
    for (; x <= y; x++) {
      d[x] = (d[x] || 0) + 1;
    }
  }

  return Object.entries(d)
    .sort(([x1, x2], [y1, y2]) => y2 - x2 || x1 - y1)[0]
    .map((x) => +x)
    .reverse();
}
