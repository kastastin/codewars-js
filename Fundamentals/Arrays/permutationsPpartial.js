// <-- Permutations (partial) -->

/*
  Making a partial permutation is selecting items from a collection, where the order of the items does matter. (This kata assumes all items in the collection are different.)

  (Making a full permutation is selecting all items from a collection. Making a partial permutation is selecting a number, between zero and the size of the collection, both inclusive, of items from a collection. Making a full permutation is thus a special case of making a partial permutation.)

  Imagine selecting a number of cards at random from a full deck of 52 cards, where the order in which cards are drawn is preserved. (Alternatively, just shuffle the deck and look at the top n cards, in order.) The number of cards can be between 0 and 52 inclusive, and for n cards there would be 52!/(52-n)! different possibilities. Selecting 52 random cards from a then empty deck thus gives you a shuffled deck, for which the number of possibilities would be ~ 8e67. CodeWars would take longer than 12 seconds to generate this permutation. To just store the result would take at least ~ 2 ** 225 bits.

  Selecting 1 item from a collection of size s has s possibilities; note that selecting s and s-1 items have the same number of possibilities, because the last selection, from a set then of size 1, does not add more possibilities. The initial order of the collection does not matter.

  Task
  Implement an Array method .permutations(n) that returns a (possibly empty) array of all possible unique (full) permutations of a combination of n items from an array.

  It should throw an Error when an invalid number n is specified; inputs should not be modified; the output should be a new array.

  Examples
  [ 0, 1 ].permutations(0) => [ [ ] ]
  [ 0, 1 ].permutations(1) => [ [ 0 ], [ 1 ] ]
  [ 0, 1 ].permutations(2) => [ [ 0, 1 ], [ 1, 0 ] ]
  [ 0, 1 ].permutations(3) => [ ]
  [ 0, 1 ].permutations(π) => Error()

  [ "♠A", "♠K" .., "♣3", "♣2" ].permutations(52) => [ [ some shuffled deck of cards ] .. and 80658175170943878571660636856403766975289505440883277823999999999999 other, different, shuffled decks ]
  Input validation
  This being a class method, the array input will always be a valid array (possibly of length 0). For this kata, assume all elements are different.

  Valid inputs for n are non-negative integers. Tests will include invalid values for n.

  Preloaded
  In the Preloaded section an Array method .fixUp() is defined that sorts the output from the .permutations() method. This is used in the default Example Tests as well as in the Submit Tests, so the order of the array elements does not matter as matters not the order of the items in the collection. Array element element order does matter, and is preserved.
*/

// <-- Solution -->
Array.prototype.permutations = function (n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error();
  }

  if (n === 0) {
    return [[]];
  }

  if (n > this.length) {
    return [];
  }

  return this.flatMap((x, i) => [...this.slice(0, i), ...this.slice(i + 1)].permutations(n - 1).map((p) => [x, ...p]));
};
