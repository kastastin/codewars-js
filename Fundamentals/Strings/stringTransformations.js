// <-- String transformations -->

/*
  You are given a string and a transformation pattern (an array of operations). Your task is to apply the operations in order to the string and return the final result.

  Each operation in the pattern is one of:

  "U" → convert the string to uppercase
  "L" → convert the string to lowercase
  "R" → reverse the string
  "D" → duplicate each character (e.g., "abc" → "aabbcc", "qqbbcc" → "qqqqbbbbcccc")

  stringTransformation("abcd", ["U","R"]) // "DCBA"
  // "abcd" → "ABCD" → "DCBA"

  stringTransformation("abc", ["D","L"])  // "aabbcc"
  // "abc" → "aabbcc" → "aabbcc" (lowercase already applied)

  stringTransformation("AbCd", ["L","R"]) // "dcba"
  // "AbCd" → "abcd" → "dcba"
*/

// <-- Solution -->
function stringTransformation(string, transformations) {
  let toCase;
  let dupCount = 0;
  let revCount = 0;

  for (const item of transformations) {
    if (item === "D") dupCount += 1;
    if (item === "R") revCount += 1;
    if (item === "U" || item === "L") toCase = item;
  }

  let result = "";

  for (const char of string) {
    if (dupCount) char = char.repeat(Math.pow(2, dupCount));
    if (toCase === "U") char = char.toUpperCase();
    if (toCase === "L") char = char.toLowerCase();

    result = revCount % 2 ? char + result : result + char;
  }

  return result;
}
