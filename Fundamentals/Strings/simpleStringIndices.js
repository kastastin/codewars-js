// <-- Simple string indices -->

/*
  In this Kata, you will be given a string with brackets and an index of an opening bracket and your task will be to return the index of the matching closing bracket. Both the input and returned index are 0-based except in Fortran where it is 1-based. An opening brace will always have a closing brace. Return -1 if there is no answer (in Haskell, return Nothing; in Fortran, return 0; in Go, return an error)

  Examples
  solve("((1)23(45))(aB)", 0) = 10 // the opening brace at index 0 matches the closing brace at index 10
  solve("((1)23(45))(aB)", 1) = 3 
  solve("((1)23(45))(aB)", 2) = -1 // there is no opening bracket at index 2, so return -1
  solve("((1)23(45))(aB)", 6) = 9
  solve("((1)23(45))(aB)", 11) = 14
  solve("((>)|?(*'))(yZ)", 11) = 14

  Input will consist of letters, numbers and special characters, but no spaces. The only brackets will be ( and ).
*/

// <-- My Solution -->
function solve(data, index) {
  if (data[index] != "(") return -1;

  let match = 0;
  let bracketI = 0;
  let bracketD = 0;

  for (let i = index; i < data.length; i++) {
    if (data[i] == "(") bracketI++;
    if (data[i] == ")") bracketD++;
    if (bracketD == bracketI) match++;
    if (bracketI == bracketD && match == 1) return i;
  }
}

// <-- Best Solution -->
function solve(s, k) {
  if (s[k] !== "(") return -1;

  let z = 1;

  for (let i = k + 1; i < s.length; i++) {
    s[i] === "(" ? z++ : s[i] === ")" ? z-- : 0;

    if (!z) return i;
  }
}
