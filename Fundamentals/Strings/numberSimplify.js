// <-- Simplify the number! -->

/*
  Given a positive integer as input, return the output as a string in the following format:

  Each digit (from left to right) multiplied by the corresponding power of 10, so that the sum equals the input number.

  If the digit is zero, exclude it from the output;
  For the last digit, just use the digit itself, without *1.
  Examples
  0     -->  ""
  56    -->  "5*10+6"
  60    -->  "6*10"
  999   -->  "9*100+9*10+9"
  10004 -->  "1*10000+4"
  Note: input >= 0
*/

// <-- My Solution -->
function simplify(n) {
  return (n + "")
    .split("")
    .map((d, i, a) => ({ d, l: a.length - i - 1 }))
    .filter((o) => +o.d)
    .map((o) => o.d + (o.l ? "*1" + "0".repeat(o.l) : ""))
    .join("+");
}

// <-- Best Solution -->
function simplifyBest(number) {
  return [...String(number)]
    .reduce((sum, num, index) => {
      return num == 0
        ? (sum += "")
        : String(number).length == index + 1
        ? (sum += `${num}+`)
        : (sum += `${num}*${Math.pow(10, String(number).length - index - 1)}+`);
    }, "")
    .slice(0, -1);
}
