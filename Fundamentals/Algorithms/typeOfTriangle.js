// <-- Which triangle is that? -->

/*
  Build a function that will take the length of each side of a triangle and return if it's either an Equilateral, an Isosceles, a Scalene or an invalid triangle.
  It has to return a string with the type of triangle.

  For example:
  typeOfTriangle(2,2,1) --> "Isosceles"
*/

// <-- My Solution -->
const typeOfTriangle = function (a, b, c) {
  const error = "Not a valid triangle";
  if (isNaN(a) || isNaN(b) || isNaN(c)) return error;
  if (a >= b + c || b >= a + c || c >= a + b) return error;

  if (a === b && b === c) return "Equilateral";
  if (a !== b && b !== c && a !== c) return "Scalene";
  if (a === b || b === c || a === c) return "Isosceles";
};

// <-- Best Solution -->
const typeOfTriangleBest = function (a, b, c) {
  [a, b, c] = [a, b, c].sort((x, y) => x - y);
  if (a + b <= c || [a, b, c].some(isNaN)) return "Not a valid triangle";

  if (a == b && b == c) return "Equilateral";
  if (a == b || a == c || b == c) return "Isosceles";
  
  return "Scalene";
};
