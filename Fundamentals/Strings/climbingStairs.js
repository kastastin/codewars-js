// <-- Climbing Stairs -->

/*
  A staircase is given with a non-negative cost per each step. Once you pay the cost, you can either climb one or two steps. Create a solution to find the minimum sum of costs to reach the top. You can start at either of the first two steps.

  Examples
  Stairs: [0, 2, 2, 1]
  Step 0: Start on first step
  Step 1: Pay 0 and climb two steps to reach the third step
  Step 2: Pay 2 and climb two steps to reach the top
  Total spent: 2

  Stairs: [0, 2, 3, 2]
  Step 0: Start on first step
  Step 1: Pay 0 and climb two steps to reach the third step
  Step 2: Pay 3 and climb two steps to reach the top
  Total spent: 3

  Stairs: [10, 15, 20]
  Step 0: Start on the second step
  Step 1: Pay 15 and climb two steps to reach the top
  Total spent: 15

  Stairs [0, 0, 0, 0, 0, 0]
  Take any path, because every step is free!

  Stairs [0, 1, 2, 0, 1, 2]
  Step 0: Start on the second step
  Step 1: Pay 1 and climb two steps to reach the fourth step
  Step 2: Pay 0 and climb one step to reach the fifth step
  Step 3: Pay 1 and climb two steps to reach the top
  Total spent: 2
  Notes
  2 <= number of steps <= 1000
*/

// <-- My Solution -->
function climbingStairs(stairs) {
  if (n === 0) return 0;
  if (n === 1) return stairs[0];

  let p2 = stairs[0];
  let p1 = stairs[1];

  for (let i = 2; i < stairs.length; i++) {
    const current = stairs[i] + Math.min(p1, p2);
    p2 = p1;
    p1 = current;
  }

  return Math.min(p2, p1);
}

// <-- Best Solution -->
function climbingStairsBest(cost) {
  let a = 0;
  let b = 0;

  for (const x of cost) {
    [a, b] = [b, x + Math.min(a, b)];
  }
  
  return Math.min(a, b);
}
