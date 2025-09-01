// <-- Telepathy -->

/*
  Firstly, the magician has 6 cards in hand.

  Then, the magician asks you to choose a number between 0 and 60 and remember it.

  After that, the magician tells you to say "Yes" when you see your chosen number among the cards, otherwise say "No".

  Finally, the magician, after listening to all your answers, can sense the number you remembered and reveal it.

  Task:
  Your task is to play the role of the magician.

  I will give you a string representing the audience's answers.

  You need to guess the number chosen by the audience.

  card has multiple numbers written on it and this set of 6 cards never changes.

  "| Card 1: Yes | Card 2: Yes | Card 3: Yes | Card 4: Yes | Card 5: No | Card 6: Yes |" -> 47
*/

// <-- My Solution -->
function magicShow(b) {
  return parseInt(
    b
      .split(" ")
      .map((a) => ("Yes" == a ? 1 : "No" == a ? 0 : ""))
      .reverse()
      .join(""),
    2,
  );
}

// <-- Best Solution -->
const magicShowBest = (a) => a.split` |`.reduce((t, c, i) => t + /Y/.test(c) * 2 ** i, 0);
