// <-- Simple linear sequence -->

/*
  For any given linear sequence, calculate the function [f(x)] and return it as a string.

  Assumptions for this kata are:
  the sequence argument will always contain 5 values equal to f(0) - f(4).
  the function will always be in the format "nx +/- m", "x +/- m", "nx', "x" or "m"
  if a non-linear sequence simply return "Non-linear sequence" or Nothing in Haskell.

  Examples (input -> output):
  [0, 1, 2, 3, 4]   -> "f(x) = x"
  [0, 3, 6, 9, 12]  -> "f(x) = 3x"
  [1, 4, 7, 10, 13] -> "f(x) = 3x + 1"
  [0, 0, 1, 1, 1]   -> "Non-linear sequence"
*/

// <-- My Solution -->
function getFunction(seq) {
  const offset = seq[0];
  const s = seq.map((a) => a - offset);

  if (!s.every((e, i) => e == s[1] * i)) {
    return "Non-linear sequence";
  }

  let formula = "f(x) = ";

  switch (s[1]) {
    case -1:
      formula += "-";
      break;
    case 0:
      return formula + offset;
    case 1:
      break;
    default:
      formula += s[1];
      break;
  }

  return formula + "x" + (offset ? (offset < 0 ? " - " : " + ") + Math.abs(offset) : "");
}

// <-- Best Solution -->
function getFunction(sequence) {
  const n = sequence[1] - sequence[0];
  const m = sequence[0];

  for (let i = 2; i <= 4; i++) {
    if (sequence[i] !== n * i + m) {
      return "Non-linear sequence";
    }
  }

  return `f(x) = ${n}x + ${m}`
    .replace(/0x \+ /, "")
    .replace(/1x/, "x")
    .replace(/\+ -/, "- ")
    .replace(/ \+ 0/, "");
}
