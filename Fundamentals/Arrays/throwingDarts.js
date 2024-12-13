// <-- Throwing Darts -->

/*
  You've just recently been hired to calculate scores for a Dart Board game!

  Scoring specifications:

  0 points - radius above 10
  5 points - radius between 5 and 10 inclusive
  10 points - radius less than 5
  If all radii are less than 5, award 100 BONUS POINTS!

  Write a function that accepts an array of radii (can be integers and/or floats), and returns a total score using the above specification.

  An empty array should return 0.

  Examples:
  scoreThrows( [1, 5, 11] )    =>  15
  scoreThrows( [15, 20, 30] )  =>  0
  scoreThrows( [1, 2, 3, 4] )  =>  140
*/

// <-- My Solution -->
function scoreThrows(radii) {
  if (!radii.length) return 0;
  
  const bonusPoints = radii.every((v) => v < 5) ? 100 : 0;
  
  return radii.reduce((acc, curr) => {
    let currentPoints = 0;

    if (curr <= 10) currentPoints = 5;
    if (curr < 5) currentPoints = 10;

    return acc + currentPoints;
  }, bonusPoints);
}

// <-- Best Solution -->
function scoreThrowsBest(a) {
  return a.length
    ? a.reduce((s, x) => (s += x < 5 ? 10 : x <= 10 ? 5 : 0), 0) +
        (Math.max(...a) < 5 ? 100 : 0)
    : 0;
}