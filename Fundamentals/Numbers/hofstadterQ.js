// <-- Hofstadter Q -->

/*
  Hofstadter sequences are a family of related integer sequences, among which the first ones were described by American professor Douglas Hofstadter in his book Gödel, Escher, Bach.

  Task
  Today we will be implementing the rather chaotic recursive sequence of integers called Hofstadter Q.
  The Hofstadter Q is defined as follows:
  As the author states in the aforementioned book:

  It is reminiscent of the Fibonacci definition in that each new value is a sum of two previous values - but not of the immediately previous two values. Instead, the two immediately previous values tell how far to count back to obtain the numbers to be added to make the new value.

  The function produces the sequence
  1, 1, 2, 3, 3, 4, 5, 5, 6, ..
  Test info
  100 random tests ( LC: 20 )
  0 < n <= 5 000 ( Python: 1 000, LC: 500 )
*/

// <-- My Solution -->
function hofstadterQ(n) {
  const arr = new Array(n + 1);

  arr[1] = 1;

  if (n >= 2) {
    arr[2] = 1;
  }

  for (let i = 3; i <= n; i++) {
    const a = i - arr[i - 1];
    const b = i - arr[i - 2];

    arr[i] = arr[a] + arr[b];
  }

  return arr[n];
}

// <-- Best Solution -->
function hofstadterQBest(n) {
  const arr = [1, 1];

  if (n < 3) return arr[n - 1];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - arr[i - 1]] + arr[i - arr[i - 2]]);
  }

  return arr.reverse()[0];
}
