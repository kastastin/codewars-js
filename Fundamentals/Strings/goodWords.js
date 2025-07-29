// <-- Good words -->

/*
  The purpose of this kata is to find words I can type quickly on this dumb keypad, hence good words. Good words herein have characters that are on the same pad, or vertical opposite the pad, or horizontally opposite the pad.

  Example
  If I typed J, any character that must follow J that will make the word good will be 5, K or L (on the same pad), any of 4, G H, I or 6, M, N, O (horizontally opposite), or any of 2, A, B, C or 8, T, U, V or 0, space(vertically opposite).

  Jako is a good word, Jake is not! 5n3Y is a good word too!

  Write a function good that takes a string as argument (case insensitive) and return true if the string is a good word and false otherwise. An empty strnig is a good word.
*/

// <-- My Solution -->
function good(t) {
  if (t.length <= 1) return true;

  t = t.toUpperCase();

  const adjacents = new Map([
    ["1", "12347*"],
    ["2", "123580"],
    ["3", "12369#"],
    ["4", "14567*"],
    ["5", "245680"],
    ["6", "34569#"],
    ["7", "14789*"],
    ["8", "257890"],
    ["9", "36789#"],
    ["*", "147*0#"],
    ["0", "258*0#"],
    ["#", "369*0#"],
  ]);

  const inputChars = " *#ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const outputChars = "0*#222333444555666777788899990123456789";

  let cur;
  let prev = outputChars[inputChars.indexOf(t[0])];

  for (let i = 1; i < t.length; ++i) {
    cur = outputChars[inputChars.indexOf(t[i])];

    if (!adjacents.get(prev).includes(cur)) return false;

    prev = cur;
  }

  return true;
}

// <-- Best Solution -->
function goodBest(t) {
  const pad = ["1", "2ABC", "3DEF", "4GHI", "5JKL", "6MNO", "7PQRS", "8TUV", "9WXYZ", "*", "0 ", "#"];
  const states = {
    0: [0, 1, 2, 3, 6, 9],
    1: [0, 1, 2, 4, 7, 10],
    2: [0, 1, 2, 5, 8, 11],
    3: [0, 3, 4, 5, 6, 9],
    4: [1, 3, 4, 5, 7, 10],
    5: [2, 3, 4, 5, 8, 11],
    6: [0, 3, 6, 7, 8, 9],
    7: [1, 4, 6, 7, 8, 10],
    8: [2, 5, 6, 7, 8, 11],
    9: [0, 3, 6, 9, 10, 11],
    10: [1, 4, 7, 9, 10, 11],
    11: [2, 5, 8, 9, 10, 11],
  };

  let last = null;

  for (const c of t) {
    const idx = pad.findIndex((e) => e.includes(c.toUpperCase()));

    if (last != null && !states[last].includes(idx)) return false;

    last = idx;
  }

  return true;
}
