// <-- Poker Suit Isomorphisms -->

/*
  Write a function that determines whether two given poker boards (represented as strings) are isomorphic.

  Function Signature
  function boardsIsomorphic(String,String) { return Boolean }
  Input
  Two strings board1 and board2, each representing a valid set of 0 to 52 unique playing cards (e.g., "AcAh2h").
  Each card is represented by a rank (one of 23456789TJQKA) followed by a suit (one of cdhs).
  There will be no duplicate cards within single board.
  Output
  Return True if the boards are isomorphic, False otherwise.
  Example
  boards_isomorphic("AcAh2h", "AsAd2d") # True
  boards_isomorphic("AcAh2h", "AsAd2c") # False
*/

// <-- My Solution -->
function boardsIsomorphic(board0, board1) {
  let c1 = { c: "", d: "", h: "", s: "" };
  let c2 = { c: "", d: "", h: "", s: "" };

  let c3 = [];
  let c4 = [];
  
  let suit;
  let suits = ["c", "d", "h", "s"];

  if (board0.length !== board1.length) return false;

  for (let i = 0; i < board0.length; i += 2) {
    c1[board0[i + 1]] += board0[i];
    c2[board1[i + 1]] += board1[i];
  }

  for (let i = 0; i < 4; i++) {
    suit = suits[i];
    c3.push([...c1[suit]].sort().join("") + " ");
    c4.push([...c2[suit]].sort().join("") + " ");
  }

  c3.sort();
  c4.sort();

  return c3.join("") === c4.join("");
}

// <-- Best Solution -->
const boardsIsomorphicBest = (board0, board1) => {
  if (board0.length !== board1.length) return false;

  const s1 = new Set();
  const s2 = new Set();
  const s3 = new Set();

  for (let i = 0; i < board1.length; i += 2) {
    s1.add(board1[i]);
    s2.add(board1[i + 1]);
  }

  for (let i = 0; i < board0.length; i += 2) {
    if (!s1.has(board0[i])) return false;

    s3.add(board0[i + 1]);
  }

  return s2.size === s3.size;
};
