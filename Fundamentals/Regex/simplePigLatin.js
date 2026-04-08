// <-- Simple Pig Latin -->

/*
  Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

  Examples:
  pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
  pigIt('Hello world !');     // elloHay orldway !
*/

// <-- Solution -->
function pigIt(str) {
  return str
    .split(" ")
    .map((w) => {
      const first = w.split("").shift();
      return /^\W+/gi.test(w) ? w : w.slice(1) + first + "ay";
    })
    .join(" ");
}
