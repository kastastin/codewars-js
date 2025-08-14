// <-- N High Scores -->

/*
  You've been given the task of retrieving the top N high scores from players of a video game.
  You need to write the function top_scores(records, n_top)
  where records is a list of lists in the form of

  records = [
    ["Bob", 100],
    ["Jane", 120],
    ["Alice", 10],
    ["Bob", 110],
    ["Bob", 10]
  ]
  
  and n_top is an integer.

  The function should return the top n records, where each user name can appear at most a single time. Records should be in from highest to lowest. Users with the same score should be in alphabetical order.

  >>> top_scores(records, 3)
  [["Jane", 120],["Bob", 110],["Alice", 10]]
  if n_top is negative or 0, the returned value should be an empty list.
  if n_top is greater than the total number of records, you should include as many valid records as possible.
*/

// <-- My Solution -->
function topScores(records, nTop) {
  if (nTop <= 0) return [];

  const bestPerUserName = {};

  for (let [name, score] of records) {
    if (name in bestPerUserName) {
      bestPerUserName[name] = Math.max(bestPerUserName[name], score);
    } else {
      bestPerUserName[name] = score;
    }
  }

  const cmp = (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]);
  const topScores = Object.keys(bestPerUserName).map((name) => [name, bestPerUserName[name]]);

  topScores.sort(cmp);

  return topScores.slice(0, nTop);
}

// <-- Best Solution -->
function topScoresBest(records, nTop) {
  return Object.entries(
    records.reduce((res, [name, score]) => ((res[name] = Math.max(res[name] || 0, score)), res), {}),
  )
    .sort(([n1, s1], [n2, s2]) => s2 - s1 || n1.localeCompare(n2))
    .slice(0, Math.max(nTop, 0));
}
