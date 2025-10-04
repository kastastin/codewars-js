// <-- Duplicate Arguments -->

/*
  Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.

  The array values passed in will only be strings or numbers. The only valid return values are true and false.

  Examples:

  solution(1, 2, 3)             -->  false
  solution(1, 2, 3, 2)          -->  true
  solution('1', '2', '3', '2')  -->  true
*/

// <-- My Solution -->
function solution(...args) {
  args = args.sort();

  for (let i = 0; i < args.length; i++) {
    if (args[i] === args[i + 1]) {
      return true;
    }
  }

  return false;
}

// <-- Best Solution -->
function solutionBest(...args) {
  return args.length !== new Set(args).size;
}
