// <-- Thue - Morse Sequence -->

/*
  Given a positive integer n, return first n dgits of Thue-Morse sequence, as a string (see examples).

  Thue-Morse sequence is a binary sequence with 0 as the first element. The rest of the sequence is obtained by adding the boolean (binary) complement of a group obtained so far.

  For example:

  0
  01
  0110
  01101001
  and so on...

  Ex.:

  1 --> "0"
  2 --> "01"
  5 --> "01101"
  10 --> "0110100110"

  You don't need to test if n is valid - it will always be a positive integer.
  n will be between 1 and 10000
*/

// <-- My Solution -->
function thueMorse(n) {
  let output = "";
  let morse = (m) => (!m ? 0 : m % 2 ? 1 - morse((m / 2) | 0) : morse(m / 2));

  for (let i = 0; i < n; i++) {
    output += morse(i);
  }

  return output;
}

// <-- Best Solution -->
function thueMorseBest(n, r = "0") {
  while (r.length < n) {
    r += r.replace(/./g, (e) => (e === "1" ? "0" : "1"));
  }

  return r.slice(0, n);
}
