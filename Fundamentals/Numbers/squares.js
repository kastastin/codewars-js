// <-- Squares -->

/*
  Use Brainfuck to print squares of all natural numbers between 0 and n inclusive.

  0 < n <= 100
  n will be given as input to BF program.
  n will be always in decimal format.
  n is defined always as 3 chars with leading zeros for example 001, 002, 003, ... 099, 100

  Examples
  Input "000" : return "0".
  Input "003" : return "0\n1\n4\n9".
  (The whitespaces from both sides of the output string are trimmed, so results such as "0\n1\n4\n9\n" will still be accepted as correct answer.)
*/

// <-- Solution -->
function gen1to100() {
  let s = "";

  for (let i = 1; i < 101; i++) {
    const q = i * i + "";
    const t = [0, 0, 0, 0, 0];

    for (let j = 4, k = q.length - 1; k >= 0; k--, j--) {
      t[j] = q[k].charCodeAt();
    }

    s += ">" + t.map((x) => "+".repeat(x)).join`>` + ">";
  }

  return s + "<".repeat(600);
}
