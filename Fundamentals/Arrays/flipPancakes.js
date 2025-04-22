// <-- Flip Your Stack(of Pancakes) -->

/*
  Write a function that takes a stack of pancakes and returns a sequence of flips that arranges them in order by diameter, with the largest pancake at the bottom and the smallest at the top. The pancakes are given as a list of positive integers, with the left end of the list being the top of the stack.

  Based on Problem 4.6.2 in Skiena & Revilla, "Programming Challenges".

  Example
  Consider the stack [1,5,8,3]. One way of achieving the desired order is as follows:

  The 8 is the biggest, so it should be at the bottom. Put the spatula under it (position 2 in the list) and flip.
  This transforms the stack into [8,5,1,3], with the 8 at the top. Then flip the entire stack (spatula position 3).
  This transforms the stack into [3,1,5,8], which has the 8 at the bottom.
  And since the 5 is in the correct position as well, now flip the 1 and 3 (spatula position 1).
  The stack is now [1,3,5,8], as desired. The function should return [2,3,1].
*/

// <-- My Solution -->
const flip = ([...stack]) => {
  const flipTop = (arr, idx, log) =>
    arr.unshift(...arr.splice(0, idx + 1).reverse()) && log.push(idx);

  const log = [];

  for (let i = stack.length - 1; i > 0; i--) {
    const max = Math.max(...stack.slice(0, i + 1));

    if (max === stack[i]) continue;

    const maxIdx = stack.indexOf(max);

    maxIdx && flipTop(stack, maxIdx, log);

    flipTop(stack, i, log);
  }

  return log;
};

// <-- Best Solution -->
function flipBest(stack) {
  if (stack.length < 2) return [];

  const max = Math.max(...stack);

  if (stack[stack.length - 1] === max) {
    return flip(stack.slice(0, stack.length - 1));
  }

  const i = stack.indexOf(max);

  return [
    i,
    stack.length - 1,
    ...flip(
      stack
        .slice(i + 1)
        .reverse()
        .concat(stack.slice(0, i)),
    ),
  ].filter((x) => x);
}
