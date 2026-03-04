// <-- Backspaces in string -->

/*
  Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

  Your task is to process a string with "#" symbols.

  Examples
  "abc#d##c"      ==>  "ac"
  "abc##d######"  ==>  ""
  "#######"       ==>  ""
  "" ==> ""
*/

// <-- Solution -->
function cleanString(str) {
  const result = [];

  for (const c of str) {
    if (c === "#") {
      result.pop();
    } else {
      result.push(c);
    }
  }

  return result.join("");
}
