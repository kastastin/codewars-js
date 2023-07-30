// <-- Unique string characters -->

/*
  You will be given two strings a and b and your task will be to return the characters that are not common in the two strings.
  Notice also that you return the characters from the first string concatenated with those from the second string.

  For example:
  solve("xyab","xzca") = "ybzc" 
  --The first string has 'yb' which is not in the second string. 
  --The second string has 'zc' which is not in the first string. 
*/

// <-- My Solution -->
function solve(a, b) {
  return []
    .concat(
      [...a].filter((c) => ![...b].includes(c)),
      [...b].filter((c) => ![...a].includes(c))
    )
    .join("");
}

// <-- Best Solution -->
function solveBest(a, b) {
  return (
    a.replace(new RegExp("[" + b + "]", "img"), "") +
    b.replace(new RegExp("[" + a + "]", "img"), "")
  );
}
