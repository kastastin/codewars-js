// <-- Triangle type -->

/*
  In this kata, you should calculate the type of triangle with three given sides a, b and c (given in any order).

  If each angle is less than 90°, this triangle is acute and the function should return 1.
  If one angle is strictly 90°, this triangle is right and the function should return 2.
  If one angle is more than 90°, this triangle is obtuse and the function should return 3.
  If three sides cannot form a triangle, or one angle is 180° (which turns the triangle into a segment) - the function should return 0.

  Examples:
  (2, 4, 6) ---> return 0 (Not triangle)
  (8, 5, 7) ---> return 1 (Acute, angles are approx. 82°, 38° and 60°)
  (3, 4, 5) ---> return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
  (7, 12, 8) ---> return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
*/

// <-- Solution -->
function triangleType(a, b, c) {
  const max = Math.max(a, b, c);

  if (a + b + c <= 2 * max) return 0;
  if (2 * max * max == a * a + b * b + c * c) return 2;
  if (2 * max * max > a * a + b * b + c * c) return 3;

  return 1;
}
