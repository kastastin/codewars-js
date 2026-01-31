// <-- How many permutations where indices change by at most 1 -->

/*
  We are going to be studying permutations of n distinct elements - for simplicity we shall use the integers from 1 to n.

  If we start with the integers 1 to n in ascending order in a list:

  [1, 2, 3, ..., n-2, n-1, n]

  then, for a given value of n, how many permutations of this list are there in which each element's index changes by AT MOST 1 after the permutation?

  Let's consider the case n = 4; so concretely we are looking at permutations of the list [1,2,3,4]
  There are in total n! = 4! = 24 possible permutations of this list.
  If you write out all of these 24 possible permutations, you will find that only 5 satisfy the above requirement:

  [1,2,3,4] - no element changes index.
  [2,1,3,4] - elements 1&2 change indices by +1 and -1 respectively.
  [1,3,2,4] - elements 2&3 change indices by +1 and -1 respectively.
  [1,2,4,3] - elements 3&4 change indices by +1 and -1 respectively.
  [2,1,4,3] - elements 1&2 change indices by +1 and -1 respectively and elements 3&4 change indices by +1 and -1 respectively.

  In all of the 5 above permutations, the elements' indices have indeed changed by at most 1.
  So for the input n = 4 you should return the answer 5.
*/

// <-- Solution -->
function permuts(number) {
  const fib = [1n, 1n, 2n];

  for (let i = 3; i <= number; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }

  return fib[number];
}
