// <-- Area of Shape -->

/*
  We'd like to know the area of an arbitrary shape. The only information of the shape is that it is bounded within the square area of four points: (0, 0), (1, 0), (1, 1) and (0, 1).

  Given a function f(x, y) which returns a boolean representing whether the point (x, y) is inside the shape, determine the area of the shape. Your answer is allowed to differ from the true answer by at most 0.01.
*/

// <-- My Solution -->
function area_of_the_shape(fn, sampleSize = 1e4) {
  let sampleCount = 0;

  for (let i = 0; i < sampleSize; i++) {
    sampleCount += fn(Math.random(), Math.random());
  }
  
  return sampleCount / sampleSize;
}
