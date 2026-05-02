// <-- Land perimeter -->

/*
  Given an array arr of strings, complete the function by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:

  ['XOOXO',
  'XOOXO',
  'OOOXO',
  'XXOXO',
  'OXOOO']

  should return: "Total land perimeter: 24".

  Following input:
  ['XOOO',
  'XOXO',
  'XOXO',
  'OOXX',
  'OOOO']

  should return: "Total land perimeter: 18"
*/

// <-- Solution -->
function landPerimeter(arr) {
  let count = 0;

  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      const currentOnXLine = arr[x][y];

      const toUp = arr[x - 1] && arr[x - 1][y];
      const toRight = arr[x][y + 1];
      const toDown = arr[x + 1] && arr[x + 1][y];
      const toLeft = arr[x][y - 1];

      if (currentOnXLine === "X") {
        if (toUp !== currentOnXLine) count++;
        if (toRight !== currentOnXLine) count++;

        if (toDown !== currentOnXLine) count++;
        if (toLeft !== currentOnXLine) count++;
      }
    }
  }

  return `Total land perimeter: ${count}`;
}
