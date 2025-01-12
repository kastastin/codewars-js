// <-- Logistic Map -->

/*
  Our AAA company is in need of some software to help with logistics: you will be given the width and height of a map, a list of x coordinates and a list of y coordinates of the supply points, starting to count from the top left corner of the map as 0.

  Your goal is to return a two dimensional array/list with every item having the value of the distance of the square itself from the closest supply point expressed as a simple integer.

  Quick examples:

  logisticMap(3,3,[0],[0])
  //returns
  //[[0,1,2],
  // [1,2,3],
  // [2,3,4]]
  logisticMap(5,2,[0,4],[0,0])
  //returns
  //[[0,1,2,1,0],
  // [1,2,3,2,1]]
*/

// <-- My Solution -->
function logisticMap(width, height, xs, ys) {
  const result = Array.from({ length: height }, () =>
    Array.from({ length: width }, () => null),
  );

  if (xs.length == 0) return result;

  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width; w++) {
      let dist = width + height;

      for (let a = 0; a < xs.length; a++) {
        if (dist > Math.abs(w - xs[a]) + Math.abs(h - ys[a])) {
          dist = Math.abs(w - xs[a]) + Math.abs(h - ys[a]);
        }
      }
      
      result[h][w] = dist;
    }
  }
  return result;
}

// <-- Best Solution -->
function logisticMapBest(n, m, x, y) {
  const arr = [...Array(m)].map((x) => Array(n));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      arr[i][j] =
        x.length > 0
          ? Math.min(...y.map((k, l) => Math.abs(i - k) + Math.abs(j - x[l])))
          : null;
    }
  }
  return arr;
}
