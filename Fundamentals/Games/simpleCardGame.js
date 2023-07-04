// <-- Simple Card Game -->

/*
  deckSteve and deckJosh are arrays representing their decks. They are filled with cards,
  represented by a single character. The card rank is as follows (from lowest to highest):
  '2','3','4','5','6','7','8','9','T','J','Q','K','A'
  Every card may appear in the deck more than once. Figure out who is going to win
  and return who wins and with what score:

  "Steve wins x to y" if Steve wins; where x is Steve's score, y is Josh's score;
  "Josh wins x to y" if Josh wins; where x is Josh's score, y is Steve's score;
  "Tie" if the score is tied at the end of the game.

  Example
  Steve is dealt: ['A','7','8']
  Josh is dealt: ['K','5','9']
  In the first round, ace beats king and Steve gets one point.
  In the second round, 7 beats 5 and Steve gets his second point.
  In the third round, 9 beats 8 and Josh gets one point.
  So you should return: "Steve wins 2 to 1"
*/

// <-- My Solution -->
function winner(deckSteve, deckJosh) {
  // prettier-ignore
  const cards = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];

  const results = { Steve: 0, Josh: 0 };

  deckSteve.forEach((_, i) => {
    if (cards.indexOf(deckSteve[i]) === cards.indexOf(deckJosh[i])) return;

    cards.indexOf(deckSteve[i]) > cards.indexOf(deckJosh[i])
      ? results.Steve++
      : results.Josh++;
  });

  const winner = Object.entries(results).reduce((a, c) =>
    c[1] > a[1] ? c : a
  )[0];
  const loser = winner === "Steve" ? "Josh" : "Steve";

  if (results.Steve === results.Josh) return "Tie";

  return `${winner} wins ${results[winner]} to ${results[loser]}`;
}

// <-- Best Solution -->
function winnerBest(deckSteve, deckJosh) {
  // prettier-ignore
  const cards = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
  let a = 0,
    b = 0;

  for (let i = 0; i < deckSteve; i++) {
    if (cards.indexOf(deckSteve[i]) > cards.indexOf(deckJosh[i])) a++;
    if (cards.indexOf(deckSteve[i]) < cards.indexOf(deckJosh[i])) b++;
  }

  return a == b
    ? "Tie"
    : a > b
    ? `Steve wins ${a} to  ${b}`
    : `Josh wins ${b} to  ${a}`;
}
