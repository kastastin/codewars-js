// <-- Ping-Pong service problem -->

/*
  Write a function that takes as its parameter the current score as a string separated by :, and returns "first" or "second" depending on whose service turn it is.

  We're playing old-school, so the rule is that players take turns after every five services. That is until the score is 20:20 - from that moment each player serves twice, in turn.

  Examples:
  at score  "0:0",  player to serve is "first"
  at score  "3:2",  player to serve is "second"
  at score "21:20", player to serve is "first"
  at score "21:22", player to serve is "second"

  There's no need to check if the passed parameter is valid - the score will be always provided in correct syntax and you don't need to check if one of the players has already won - that won't be the case.

  The game ends when one of the players reaches 21 points with a minimum 2 point lead.
  After a score of 20:20, the winner will be the first player to reach a 2 point lead.
*/

// <-- My Solution -->
function service(score) {
  const scores = score.split(":");
  const sum = parseInt(scores[0]) + parseInt(scores[1]);

  if (sum < 40) {
    return Math.floor(sum / 5) % 2 ? "second" : "first";
  } else {
    return sum % 4 > 1 ? "second" : "first";
  }
}

// <-- Best Solution -->
function serviceBest(score) {
  const scores = score.split(":");
  const sumScores = +scores[0] + +scores[1];

  return Math.floor(sumScores / (sumScores < 40 ? 5 : 2)) % 2 === 0 ? "first" : "second";
}
