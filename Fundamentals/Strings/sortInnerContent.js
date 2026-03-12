// <-- Srot the inner ctonnet in dsnnieedcg oredr -->

/*
  You have to sort the inner content of every word of a string in descending order.

  The inner content is the content of a word without first and the last char.

  Some examples:

  "sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
  "wait for me"        -->  "wiat for me"
  "this kata is easy"  -->  "tihs ktaa is esay"

  Words are made up of lowercase letters.
  The string will never be null and will never be empty.
  words will be separated by a single space character
  the string will have neither leading nor trailing spaces
*/

// <-- Solution -->
function sortTheInnerContent(words) {
  return words
    .split(" ")
    .map((word) => {
      if (word.length < 4) {
        return word;
      }

      const first = word[0];
      const last = word.slice(-1);
      const middle = word.slice(1, -1);
      const sortedMiddle = middle.split("").sort().reverse().join("");

      return first.concat(sortedMiddle, last);
    })
    .join(" ");
}
