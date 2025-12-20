// <-- Backspaces in string -->

/*
  Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

  Your task is to process a string with "#" symbols.

  Examples
  "abc#d##c"      ==>  "ac"
  "abc##d######"  ==>  ""
  "#######"       ==>  ""
  ""              ==>  ""
*/

// <-- My Solution -->
function cleanString(s) {
  const result = [];

  [...s].map((char) => (char === "#" ? result.pop() : result.push(char)));

  return result.join("");
}

// <-- Best Solution -->
function cleanStringBest(s) {
  return s.includes(`#`) ? cleanString(s.replace(/[^#]?#/, ``)) : s;
}
