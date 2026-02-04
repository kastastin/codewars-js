// <-- Non-even substrings -->

/*
  Given a string of integers, return the number of odd-numbered substrings that can be formed.

  For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

  solve("1341") = 7. See test cases for more examples.
*/

// <-- My Solution -->
function solve(s) {
  let count = 0;

  for (let i = s.length; i > -1; i--) {
    if (+s[i] % 2) {
      count += i + 1;
    }
  }

  return count;
}

// <-- Best Solution -->
function solveBes(s) {
  return [...s].reduce((acc, val, idx) => acc + (val % 2) * ++idx, 0);
}
