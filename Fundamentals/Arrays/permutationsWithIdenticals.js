// <-- Permutations(partial) with identicals -->

/*
  Making a partial permutation is selecting items from a collection, where the order of the items does matter.
  ( This kata does not assume all items in the collection are different. )

  ( Making a full permutation is selecting all items from a collection. Making a partial permutation is selecting a number, between zero and the size of the collection, both inclusive, of items from a collection. Making a full permutation is thus a special case of making a partial permutation. )

  Imagine selecting 2 cards at random from two ( different ) full decks of 52 cards shuffled together, where the order in which cards are drawn is preserved. There are 104 possibilities for the first drawn card and 103 for the second one.
  If only the face value is considered however, drawing the ♣2 from the red deck, then the ♣2 from the blue deck can be considered the same as drawing them in reverse order. Also, if a ♥K is drawn as the second card, it can come from either deck. The presence of identical items in the collection thus reduces the number of different possible permutations.

  Selecting 1 item from a collection consisting of d different items has d different possibilities. The total number of different full permutations for a collection consisting of d different items, respectively appearing n0, n1, .. nd times, would be ( n0 + n1 + .. nd ) ! / ( n1! × n2! × .. nd! ). Shuffling "Mississippi" ( that is what a full permutation does ) - 1 "M", 4 "i"s, 4 "s"s, 2 "p"s, 11 letters - has 11! / ( 1! × 4! × 4! × 2! ) = 34650 possibilities, or anagrams of "Mississippi", most of them unpronounceable. Shuffling 2 decks of cards has 104! / ( 2! ^ 52 ), ~ 10150, possibilities.
  The initial order of the collection does not matter, neither for partial nor for full permutations. Shuffling a shuffled deck of cards will give you a shuffled deck of cards every time.

  Task
  Implement an Array method .permutations(n) that returns a ( possibly empty ) array of all possible unique ( full ) permutations of a combination of n items from an array.
  It should throw an Error when an invalid number n is specified; inputs should not be modified; the output should be a new array; the method should be either not enumerable, or configurable, or both.

  Examples
  [ 0, 0, 1 ].permutations(0) => [ [ ] ]
  [ 0, 0, 1 ].permutations(1) => [ [ 0 ], [ 1 ] ]
  [ 0, 0, 1 ].permutations(2) => [ [ 0, 0 ], [ 0, 1 ], [ 1, 0 ] ]
  [ 0, 0, 1 ].permutations(3) => [ [ 0, 0, 1 ] , [ 0, 1, 0 ] , [ 1, 0, 0 ] ]
  [ 0, 0, 1 ].permutations(4) => [ ]
  [ 0, 0, 1 ].permutations(π) => Error()

  [ "♠A", "♠K" .., "♣3", "♣2", "♠A", "♠K" .., "♣3", "♣2" ].permutations(104) => [ [ quite a stack of cards ] .. and 2286841104292142739817480260270397947731385025482502766874913064240686762501672463119886085466145431873911265472729321167650815999999999999999999999999 other, different, shuffled stacks ]
  Input validation
  This being a class method, the array input will always be a valid array ( possibly of length 0 ). For this kata, take into account that elements might not be different.
  Valid inputs for n are non-negative integers. Tests will include invalid values for n.

  Preloaded
  In the Preloaded section, a function normalise is defined that sorts the output from the .permutations() method. This is used in the default Example Tests as well as in the Submit Tests, so the order of the array elements does not matter as matters not the order of the items in the collection. Array element element order does matter, and is preserved.
*/

// <-- Solution -->
Array.prototype.permutations = function (n) {
  if (typeof n != "number" || !Number.isInteger(n) || n < 0) throw Error("not valid parameter");
  if (n > this.length) return [];
  if (n == 0) return [[]];

  let response = [];
  const options = [...new Set(this)];

  for (const current of options) {
    const pos = this.indexOf(current);
    this.filter((_, j) => j != pos)
      .permutations(n - 1)
      .forEach((a) => {
        const next = [current, ...a];

        if (!response.some((b) => b.every((c, i) => c === next[i]))) {
          response.push(next);
        }
      });
  }

  return response;
};
