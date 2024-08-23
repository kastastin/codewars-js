// <-- Hamming Distance -->

/*
  The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

  Examples:
  a = "I like turtles"
  b = "I like turkeys"
  Result: 3

  a = "Hello World"
  b = "Hello World"
  Result: 0

  a = "espresso"
  b = "Expresso"
  Result: 2
*/

// <-- My Solution -->
function hamming(a, b) {
  let distance = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) distance++;
  }

  return distance;
}

// <-- Best Solution -->
function hammingBest(a, b) {
  return a.split("").filter((_, i) => a[i] != b[i]).length;
}
