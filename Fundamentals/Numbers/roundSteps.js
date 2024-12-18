// <-- Round by 0.5 steps -->

/*
  Round any given number to the closest 0.5 step

  I.E.

  solution(4.2) = 4
  solution(4.3) = 4.5
  solution(4.6) = 4.5
  solution(4.8) = 5
  Round up if number is as close to previous and next 0.5 steps.

  solution(4.75) == 5
*/

// <-- My Solution -->
function solution(n) {
  const d = n % 1;

  return Math.floor(n) + (d < 0.25 ? 0 : d >= 0.75 ? 1 : 0.5);
}

// <-- Best Solution -->
function solutionBest(n) {
  return Math.round(n * 2) / 2;
}
