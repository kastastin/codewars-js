// <-- Fibonacci Streaming -->

/*
  You're going to provide a needy programmer a utility method that generates an infinite amount of sequential fibonacci numbers.

  to do this return an Iterator<BigInt> starting with 1

  A fibonacci sequence starts with two 1s. Every element afterwards is the sum of the two previous elements. See:

  1, 1, 2, 3, 5, 8, 13, ..., 89, 144, 233, 377, ...
*/

// <-- My Solution -->
function* fibonacciSequence() {
  let [fib, nextFib] = [0n, 1n];

  while (true) {
    [fib, nextFib] = [nextFib, fib + nextFib];
    yield fib;
  }
}

// <-- Best Solution -->
function* fibonacciSequenceBest() {
  const arr = [1n, 1n];
  
  while (1) {
    arr.push(arr[0] + arr[1]);
    yield arr.shift();
  }
};
