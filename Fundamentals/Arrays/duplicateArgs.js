// <-- Duplicate Args -->

/*
  Complete the solution so that it returns true if it contains any duplicate argument values, and false otherwise. Any number of arguments may be passed into the function.

  The arguments passed in will only be strings or numbers.

  Examples:
  solution(1, 2, 3)             -->  false
  solution(1, 2, 3, 2)          -->  true
  solution('1', '2', '3', '2')  -->  true
*/

// <-- My Solution -->
function solution() {
  for (let map = new Map(), i = arguments.length; i--; ) {
    if (map.has(arguments[i])) {
      return true;
    }

    map.set(arguments[i], 1);
  }

  return false;
}

// <-- Best Solution -->
const solutionBest = (...a) => new Set(a).size < a.length;
