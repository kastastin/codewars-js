// <-- Identify Ball Bearings -->

/*
  What you know about the bearings:

  'deluxe' ball-bearings weigh exactly 11 grams
  'normal' ball-bearings weigh exactly 10 grams
  Besides weight, both kinds of ball-bearings are identical
  There are (effectively) infinite bearings in each box
  Each box contains exclusively one type of bearing (either regular, or 'deluxe')

  To help you identify the right box, you also have access to a Super Scale™ which will tell you the exact weight of anything you give it. Unfortunately, getting it ready for each measurement takes a long time, so you only have time to use it once!

  Task
  Write a function which accepts two arguments:

  bearings: A list of the bearing types contained in each 'box'. (length between 1 and 200 inclusive)
  weigh: a function which accepts any number of arguments, returning the total weight of all. Can only be used once!
  Your function should identify and return the single 'deluxe' bearing sample from bearings.
*/

// <-- My Solution -->
function identifyBB(bearings, weigh) {
  const boxes = bearings.length;

  const scales = bearings.reduce(
    (scales, bearing, idx) => scales.concat(Array(idx).fill(bearings[idx])),
    [],
  );

  const deluxeIdx = weigh(...scales) - boxes * (boxes - 1) * 5;

  return bearings[deluxeIdx];
}

// <-- Best Solution -->
function identifyBBBest(bearings, weigh) {
  const w = weigh(...bearings.flatMap((x, i) => Array(i).fill(x))),
    n = bearings.length;

  return bearings[w - 5 * n * (n - 1)];
}
