// <-- Hyper Sphere -->

/*
  You will be given an array of cordinates and a radius. The function should return if the coordinates describe a point within the given radius of the origin.

  In two dimensions the condition that any [x, y] coordinate lies in a given radius (= a circle) is:

  This generalises to higher dimensions as follows:

  Note: a point with no coordinates should return true, as in zero dimensions all points are the same point
*/

// <-- My Solution -->
function inSphere(coords, radius) {
  if (!coords.length) return true;

  const coordsTotal = coords.reduce((sum, coord) => {
    return (sum += coord ** 2);
  }, 0);

  return coordsTotal <= radius ** 2;
}

// <-- Best Solution -->
const inSphereBest = (c, r) => Math.hypot(...c) <= r;
