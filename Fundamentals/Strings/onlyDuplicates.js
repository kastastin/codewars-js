// <-- Only Duplicates -->

/*
  Given a string, remove any characters that are unique from the string.

  Example:

  input: "abccdefee"

  output: "cceee"
*/

// <-- My Solution -->
function onlyDuplicates(str) {
  let chars = {};

  for (let c of str) {
    if (c in chars) chars[c] += 1;
    else chars[c] = 1;
  }

  return [...str].filter((c) => chars[c] > 1).join("");
}

// <-- Best Solution -->
function onlyDuplicatesBest(str) {
  return str
    .split("")
    .filter((e) => str.indexOf(e) != str.lastIndexOf(e))
    .join("");
}
