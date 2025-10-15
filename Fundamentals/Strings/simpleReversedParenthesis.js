// <-- Simple reversed parenthesis -->

/*
  Given a string, return the minimal number of parenthesis reversals needed to make balanced parenthesis.

  For example:
  solve(")(") = 2 Because we need to reverse ")" to "(" and "(" to ")". These are 2 reversals. 
  solve("(((())") = 1 We need to reverse just one "(" parenthesis to make it balanced.
  solve("(((") = -1 Not possible to form balanced parenthesis. Return -1.

  Parenthesis will be either "(" or ")".
*/

// <-- My Solution -->
function solve(s) {
  if (s.length % 2) {
    return -1;
  }

  let reversals = 0;
  let str = s.slice(0);

  while (str.length > 1) {
    if (str.slice(0, 1) == ")") {
      reversals++;
      str = str.replace(/^\)/, "(");
    }

    if (str.slice(-1) == "(") {
      reversals++;
      str = str.replace(/\($/, ")");
    }

    str = str.replace(/\(\)/g, "");
  }

  return reversals;
}

// <-- Best Solution -->
function solveBest(s) {
  while (s.search(/\(\)/g) != -1) {
    s = s.replace(/\(\)/g, "");
  }

  const ss = s.replace(/\(\(|\)\)/g, "");
  const l = ss.length;
  const l_ = s.length;
  const sss = ss.replace(/\)\(/g, "");

  return sss ? -1 : (l_ - l) / 2 + l;
}
