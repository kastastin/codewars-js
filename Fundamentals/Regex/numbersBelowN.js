// <-- Regex matching all positive numbers below n -->

/*
  You are given a positive natural number n (which is n > 0) and you should create a regular expression pattern which only matches the decimal representation of all positive natural numbers strictly less than n without leading zeros. The empty string, numbers with leading zeros, negative numbers and non-numbers should not match the regular expression compiled from your returned pattern.

  Input
  n > 0 natural number, n can be from the full possible positive range

  Output
  regular expression pattern as string which will be used to compile a regular expression to do the matches

  Tests
  The compiled regular expression will be tested against decimal representations of random numbers with and without leading zeros, strings including letters and the empty string and should only match for decimal representations of numbers k with 0 < k < n.

  Tests use chai.assert.match() which itself uses RegExp.prototype.exec() to do the matches.
*/

// <-- Solution -->
function regexBelow(n) {
  if (n === 1) return "$.";

  let nd = 1;
  let pow10 = 1;

  while (pow10 * 10 <= n) {
    pow10 *= 10;
    nd++;
  }

  const parts = [];
  const s = n.toString();

  for (let i = 1; i < nd; i++) {
    parts.push(`[1-9]\\d{${i - 1}}`);
  }

  for (let i = 1; i <= nd; i++) {
    if (+s[i - 1] > +(i === 1)) {
      parts.push(`${s.slice(0, i - 1)}[${+(i === 1)}-${s[i - 1] - 1}]\\d{${nd - i}}`);
    }
  }

  return `^(?:${parts.join("|")})$`;
}
