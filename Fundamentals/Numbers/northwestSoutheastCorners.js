// <-- Northwest and Southeast corners -->

/*
  Every day we go to different places to get our things done.

  Those places can be represented by specific location points [ [<lat>, <long>], ... ] on a map.

  I will be giving you an array of arrays that contain coordinates of the different places I had been on a particular day.

  Your task will be to find peripheries (outermost edges) of the bounding box that contains all the points.

  The response should only contain Northwest and Southeast points as follows: { "nw": [<lat>, <long>], "se": [ <lat>, <long>] }.
*/

// <-- My Solution -->
function boxBest(coords) {
  return {
    nw: [
      Math.max(...coords.map((p) => p[0])),
      Math.min(...coords.map((p) => p[1])),
    ],
    se: [
      Math.min(...coords.map((p) => p[0])),
      Math.max(...coords.map((p) => p[1])),
    ],
  };
}

// <-- Best Solution -->
function box(coords) {
  const corners = { nw: [0, 0], se: [0, 0] };
  const lat = coords.map((e) => e[0]);
  const long = coords.map((e) => e[1]);

  corners.se[1] = Math.max(...long.filter((e) => e >= 0));
  corners.nw[1] = Math.min(...long.filter((e) => e < 0));
  corners.se[0] = Math.min(...lat.filter((e) => e < 0));
  corners.nw[0] = Math.max(...lat.filter((e) => e >= 0));

  return corners;
}
