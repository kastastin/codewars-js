// <-- Bocce -->

/*
  Bocce is a game played by two competing teams, with three types of balls. Each team has its own set of balls (in this kata red and black) and there is a neutral ball called the jack. The jack is thrown at the beginning of each round, followed by the players trying to throw their balls as closely to it as possible. The team with their balls closest to the jack wins the round!

  The number of points the winning team scores equals the number of their balls being closer to jack than any of the other team's balls: if the red team has 3 balls closer to jack than any of the black team's balls, they will win scoring 3 points. Equidistant balls on opposing teams will cancel out and neither team will score beyond that point.

  For more information on Bocce see here.

  Your task
  Implement a function that will return a message indicating the winner of the round. If there's no winner, return the string "No points scored".

  It takes an array of balls that are hash tables (depending on your language). Each ball has 2 properties: type and distance.

  The type will be "red", "black", or "jack". For all test cases, the jack will be the last element on the balls array. The distance property will be an array with two integer values. The first value is the distance thrown forward, the second value is the distance thrown left or right (negative values indicate distance to the left). For the purposes of this Kata, all balls are thrown from the same initial point.
*/

// <-- My Solution -->
function bocceScore(balls) {
  let jack = balls.pop();

  let rating = balls
    .reduce(
      (t, d) => {
        t[+(d.type === "black")].d.push(
          (jack.distance[1] - d.distance[1]) ** 2 +
            (jack.distance[0] - d.distance[0]) ** 2,
        );
        return t;
      },
      [
        { n: "red", d: [] },
        { n: "black", d: [] },
      ],
    )
    .map((t) => (t.d.sort((a, b) => a - b), t))
    .sort((t1, t2) => t1.d[0] - t2.d[0]);

  let points = rating[0].d.filter((d) => d < rating[1].d[0]).length;

  return points ? `${rating[0].n} scores ${points}` : "No points scored";
}

// <-- Best Solution -->
const bocceScoreBest = (
  a,
  s = a.slice(0, -1),
  j = a.slice(-1)[0].distance,
  t = (a, b) => a.map((r) => b.every((b) => b > r)).filter((a) => a).length,
) => {
  const f = (p) =>
    s
      .filter((a) => a.type[0] == p)
      .map((a) => Math.hypot(a.distance[0] - j[0], a.distance[1] - j[1]));

  const r = t(f("r"), f("b"));
  const b = t(f("b"), f("r"));

  return !r && !b
    ? "No points scored"
    : `${r > b ? "red" : "black"} scores ${r > b ? r : b}`;
};
