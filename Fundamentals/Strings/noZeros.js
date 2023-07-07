// <-- No zeros for heros -->

/*
  Numbers ending with zeros are boring.
  They might be fun in your world, but not here.
  Get rid of them. Only the ending ones.
  Zero alone is fine, don't worry about it. Poor guy anyway.

  Example:
  1450 -> 145
  960000 -> 96
  1050 -> 105
  -1050 -> -105
*/

// <-- My Solution -->
function noBoringZeros(n) {
  return +n.toString().replace(/0+$/gi, "");
}

// <-- Best Solution -->
function noBoringZerosBest(n) {
  while (n % 10 === 0 && n !== 0) n = n / 10;
  return n;
}
