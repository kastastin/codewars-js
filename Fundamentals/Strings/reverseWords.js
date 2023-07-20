// <-- Reverse words -->

/*
  Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

  Examples
  "This is an example!" ==> "sihT si na !elpmaxe"
  "double  spaces"      ==> "elbuod  secaps"
*/

// <-- My Solution -->
function reverseWords(str) {
  return str
    .split(" ")
    .map((el) => el.split("").reverse().join(""))
    .join(" ");
}

// <-- Best Solution -->
function reverseWordsBest(str) {
  return str.replace(/\S+/g, (el) => [...el].reverse().join(""));
}
