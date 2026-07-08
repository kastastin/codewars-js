// <-- Bird Mountain -->

/*
  A bird flying high above a mountain range is able to estimate the height of the highest peak.

  Example
  The birds-eye view
  ^^^^^^
  ^^^^^^^^
    ^^^^^^^
    ^^^^^
    ^^^^^^^^^^^
    ^^^^^^
    ^^^^
  The bird-brain calculations
  111111
  1^^^^111
    1^^^^11
    1^^^1
    1^^^^111111
    1^^^11
    1111

  111111
  12222111
    12^^211
    12^21
    12^^2111111
    122211
    1111

  111111
  12222111
    1233211
    12321
    12332111111
    122211
    1111

  Height = 3
*/

// <-- Solution -->
function peakHeight(terrain, height = 1) {
  let flag = false;

  const modifiedTerrain = terrain.map((row, rowIdx) =>
    row.map((value, colIdx) => {
      if (value === "^") {
        if (
          rowIdx === 0 ||
          rowIdx === terrain.length - 1 ||
          colIdx === 0 ||
          colIdx === row.length - 1 ||
          row[colIdx - 1] === " " ||
          row[colIdx + 1] === " " ||
          terrain[rowIdx - 1][colIdx] === " " ||
          terrain[rowIdx + 1][colIdx] === " "
        ) {
          flag = true;
          
          return " ";
        }
      }

      return value;
    }),
  );

  modifiedTerrain.forEach((row) => console.log(row.join``));

  return flag ? peakHeight(modifiedTerrain, height + 1) : height - 1;
};
