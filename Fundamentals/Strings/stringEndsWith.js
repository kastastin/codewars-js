// <-- String ends with? -->

/*
  Complete the solution so that it returns true if the first argument(string)
  passed in ends with the 2nd argument (also a string).

  Examples:
  stringEndsWith('abc', 'bc') // returns true
  stringEndsWith('abc', 'd') // returns false
*/

// <-- My Solution -->
function stringEndsWith(str, ending) {
  if (ending === "") return true;

  const strEnding = str.slice(-ending.length);
  return strEnding === ending;
}

// <-- Best Solution -->
function stringEndsWithBest(str, ending) {
  return str.endsWith(ending);
}
