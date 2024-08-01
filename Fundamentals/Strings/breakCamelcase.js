// <-- Break camelCase -->

/*
  Complete the solution so that the function will break up camel casing, using a space between words.

  Example
  "camelCasing"  =>  "camel Casing"
  "identifier"   =>  "identifier"
  ""             =>  ""
*/

// <-- My Solution -->
function solution(string) {
  string = string.split("").map(function (el) {
    if (el === el.toUpperCase()) el = " " + el;

    return el;
  });

  return string.join("");
}

// <-- Best Solution -->
function solutionBest(string) {
  return string.replace(/([A-Z])/g, " $1");
}
