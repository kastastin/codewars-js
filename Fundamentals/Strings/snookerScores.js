// <-- Alex & snooker: scores -->

/*
  Alex is a devoted fan of snooker Masters and in particular, he recorded results of all matches. Help Alex to know the score of matches.

  Hint:
  A string with a score presented as follows: "24-79(72); 16-101(53); ..."
  "24" - Points scored the first player;
  "79" - the number of points of the second player.
  "(72)" - the maximum score for one approach.

  Also, the player's account may be expressed as 105(53,52):
  "105" - points in the frame, "53" and "52" - two separate numbers(not float) maximum points in the frame.

  Frames are separated by ";" and players score - "-"
  It should count the number of frames won by one and another player, and output the data as a "[10,7]"
*/

// <-- My Solution -->
function frame(input) {
  let player1 = 0;
  let player2 = 0;

  input.split(";").forEach((frame) => {
    const [score1, score2] = frame.split("-").map((part) => part.split("(")[0].trim());

    if (parseInt(score1) > parseInt(score2)) {
      player1++;
    } else {
      player2++;
    }
  });

  return [player1, player2];
}

// <-- Best Solution -->
function frameBest(score) {
  const result = [0, 0];
  const games = score.split(";");

  games.forEach((game) => {
    const scores = game.split("-").map((score) => parseInt(score));

    scores[0] > scores[1] ? result[0]++ : result[1]++;
  });

  return result;
}
