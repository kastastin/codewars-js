// <-- Goldbach's Conjecture -->

/*
  Goldbach's conjecture is amongst the oldest and well-known unsolved mathematical problems out there. In correspondence with Leonhard Euler in 1742, German mathematician Christian Goldbach made a conjecture stating that:

  "Every even integer greater than 2 can be written as the sum of two primes"

  which is known today as the (strong) Goldbach's conjecture.

  Even though it's been thoroughly tested and analyzed and seems to be true, it hasn't been proved yet (thus, remaining a conjecture.)

  Your task is to implement the function in the starter code, taking into account the following:

  If the argument isn't even and greater than two, return an empty array/tuple.
  For arguments even and greater than two, return a two-element array/tuple with two prime numbers whose sum is the given input.
  The two prime numbers must be the farthest ones (the ones with the greatest difference)
  The first prime number must be the smallest one.
  A few sample test cases:

  checkGoldbach(2)/check_goldbach(2) should return []
  checkGoldbach(5)/check_goldbach(5) should return []
  checkGoldbach(4)/check_goldbach(4) should return [2, 2]
  checkGoldbach(6)/check_goldbach(6) should return [3, 3]
  checkGoldbach(14)/check_goldbach(14) should return [3, 11]
*/

// <-- My Solution -->
function checkGoldbach(number) {
  function checkEven(number) {
    return number > 2 && number % 2 === 0;
  }

  function checkPrime(number) {
    if (number === 1 || number === 2) return true;

    for (let i = 2; i < number / 2; i++) {
      if (number % i === 0) return false;
    }

    return true;
  }

  if (!checkEven(number)) return [];

  for (let i = 2; i <= number / 2; i++) {
    if (checkPrime(number - i) && checkPrime(i)) {
      return [i, number - i];
    }
  }
}

// <-- Best Solution -->
function checkGoldbachBest(number) {
  if (number % 2 != 0 || number <= 2) return [];

  function isPrime(n) {
    if (n % 1 || n < 2) return false;

    for (let i = 2; i * i <= n; i++) {
      if (!(n % i)) return false;
    }

    return true;
  }

  for (let p1 = 2; p1 + p1 <= number; p1++) {
    const p2 = number - p1;
    
    if (isPrime(p1) && isPrime(p2)) {
      return [p1, p2];
    }
  }
}
