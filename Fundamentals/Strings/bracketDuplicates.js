// <-- Bracket Duplicates -->

/*
  Create a program that will take in a string as input and, if there are duplicates of more than two alphabetical characters in the string, returns the string with all the extra characters in a bracket.

  For example, the input "aaaabbcdefffffffg" should return "aa[aa]bbcdeff[fffff]g"

  Please also ensure that the input is a string, and return "Please enter a valid string" if it is not.
*/

// <-- My Solution -->
function stringParse(str) {
  if (typeof str !== "string") {
    return "Please enter a valid string";
  }

  return s.replace(/(.)\1{2,}/g, (a) => `${a.slice(0, 2)}[${a.slice(2)}]`);
}

// <-- Best Solution -->
function stringParse(str) {
  return typeof str !== "string" ? "Please enter a valid string" : str.replace(/(\w)\1(\1+)/g, "$1$1[$2]");
}
