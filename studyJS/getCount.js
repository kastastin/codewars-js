const colors = ["red", "red", "red", "blue", "white", "red", "blue"],
  colorsCount = getCount(colors);

console.log(colorsCount); // { red: 4, blue: 2, white: 1 }

function getCount(arr) {
  return arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}
