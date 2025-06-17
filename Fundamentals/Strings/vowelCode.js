// <-- The Vowel Code -->

/*
  Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

  a -> 1
  e -> 2
  i -> 3
  o -> 4
  u -> 5
  For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

  Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

  For example, decode("h3 th2r2") would return "hi there".

  For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

// <-- My Solution -->
function encode(string) {
  return (encoded = string
    .replace(/a/g, "1")
    .replace(/e/g, "2")
    .replace(/i/g, "3")
    .replace(/o/g, "4")
    .replace(/u/g, "5"));
}

function decode(string) {
  return (decoded = string
    .replace(/1/g, "a")
    .replace(/2/g, "e")
    .replace(/3/g, "i")
    .replace(/4/g, "o")
    .replace(/5/g, "u"));
}

// <-- Best Solution -->
function encodeBest(string) {
  return string.replace(/[aeiou]/g, (x) => "_aeiou".indexOf(x));
}

function decodeBest(string) {
  return string.replace(/\d/g, (x) => "_aeiou"[x]);
}
