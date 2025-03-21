// <-- Random Testcases Fizz Buzz -->

/*
  In this kata, you will be the author, and I'm going to challenge your tests. Your task is to generate random test cases, that accept correct solutions and reject incorrect ones.

  Mission 1:

  Complete the function randomNumber(), which returns a positive integer between 1 and 9999 (both included).

  Mission 2:

  The generated random numbers should distribute as described below:

  multiple of 3 and/or 5: 80±5% (range 75%-85%)
  divisible by neither 3 nor 5: 20±5% (range 15%-25%)
  That is all about what you are going to do. Let's get it started!
*/

// <-- My Solution -->
function randomNumber() {
  while (true) {
    let num = Math.floor(Math.random() * 9999) + 1;

    if (Math.random() < 0.8) {
      if (num % 3 === 0 || num % 5 === 0) return num;
    } else {
      if (num % 3 !== 0 || num % 5 !== 0) return num;
    }
  }
}

// <-- Best Solution -->
const randomNumberBest = () => {
  const num = (Math.random() * 9999 + 1) ^ 0;

  return !(num % 3) || !(num % 5) || Math.random() < 0.2186
    ? num
    : randomNumber();
};
