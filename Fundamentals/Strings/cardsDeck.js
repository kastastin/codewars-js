// <-- A functional deck of cards -->

/*
  Build a deck of playing cards by generating 52 strings representing cards. There are no jokers.

  Each card string will have the format of:

  "ace of hearts"
  "ace of spades"
  "ace of diamonds"
  "ace of clubs"
  And will consist of the following ranks:

  ace two three four five
  six seven eight nine ten
  jack queen king
  They do not need to be in order.

  Additional constraints
  1 line only!
  buildDeck is a variable holding your deck. It is not a function.
*/

// <-- My Solution -->
const buildDeck = [
  "ace",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "jack",
  "queen",
  "king",
].reduce(
  (deck, card) =>
    deck
      .concat(`${card} of spades`)
      .concat(`${card} of clubs`)
      .concat(`${card} of hearts`)
      .concat(`${card} of diamonds`),
  []
);

// <-- Best Solution -->
const buildDeckBest = [
  "ace",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "jack",
  "queen",
  "king",
]
  .map((rank) =>
    ["hearts", "spades", "diamonds", "clubs"].map(
      (format) => `${rank} of ${format}`
    )
  )
  .reduce((acc, cur) => [...acc, ...cur]);
