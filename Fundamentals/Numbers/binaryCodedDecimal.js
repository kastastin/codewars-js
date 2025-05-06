// <-- Binary Coded Decimal -->

/*
  Convert a number to a binary coded decimal (BCD).

  You can assume input will always be an integer. If it is a negative number then simply place a minus sign in front of the output string. Output will be a string with each digit of the input represented as 4 bits (0 padded) with a space between each set of 4 bits.

  Ex.

  n =  10 -> "0001 0000"
  n = -10 -> "-0001 0000"
*/

// <-- My Solution -->
function toBcd(n) {
  let s = n < 0 ? "-" : "";

  n = (n * n) ** 0.5;

  return (
    s +
    ("" + n)
      .split("")
      .map((x) => (+x).toString(2).padStart(4, 0))
      .join(" ")
  );
}

// <-- Best Solution -->
function toBcdBest(n) {
  return (
    (n < 0 ? "-" : "") +
    [...("" + Math.abs(n))].map((x) => (+x).toString(2).padStart(4, "0"))
      .join` `
  );
}
