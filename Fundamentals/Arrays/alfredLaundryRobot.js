// <-- Alfred's Laundry Robot -->

/*
  Alfred Pennyworth has created a robot to drop off Batman's leotards at the launderette, but he needs some help coding the robot's path-finding function through Gotham City.

  Gotham City is laid out as a perfect 1 km × 1 km grid and is navigated using north, east, south, and west (n, e, s, w) commands. There are two launderettes for the robot to choose from, but unfortunately, the robot can sometimes get lost.

  Write a function that returns true if the robot's final position is the location of either launderette, and false otherwise.

  Launderette location 1: e, n, e, e, n.
  Launderette location 2: w, n, w, n, w, w, n.
*/

// <-- Solution -->
function pathFinding(a) {
  const x = a.filter((i) => i == "n").length - a.filter((i) => i == "s").length;
  const y = a.filter((i) => i == "w").length - a.filter((i) => i == "e").length;

  return (x == 2 && y == -3) || (x == 3 && y == 4);
}
