// <-- Permutation position -->

/*
  In this kata you will have to permutate through a string of lowercase letters, each permutation will start at a and you must calculate how many iterations it takes to reach the current permutation.

  Examples

  input: 'a'
  result: 1

  input: 'c'
  result: 3

  input: 'z'
  result: 26

  input: 'foo'
  result: 3759

  input: 'aba'
  result: 27

  input: 'abb'
  result: 28
*/

// <-- My Solution -->
function permutationPosition(s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    result = result * 26 + s.charCodeAt(i) - 97;
  }

  return result + 1;
}

// <-- Best Solution -->
function permutationPositionBest(perm) {
  return perm.split("").reduce((p, c) => 26 * p + (c.charCodeAt(0) - 97), 0) + 1;
}
