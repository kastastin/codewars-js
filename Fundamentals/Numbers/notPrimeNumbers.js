// <-- Not prime numbers -->

/*
  You are given two positive integers a and b (a < b <= 20000). Complete the function which returns a list of all those numbers in the interval [a, b) whose digits are made up of prime numbers (2, 3, 5, 7) but which are not primes themselves.
*/

// <-- My Solution -->
function notPrimes(a, b) {
  function isPrime(value) {
    for (var i = 2; i < value; i++) {
      if (value % i === 0) {
        return false;
      }
    }

    return value > 1;
  }

  return Array.from({ length: b - a }, (v, k) => "" + (k + a)).reduce(
    (r, v) => {
      if (!/[014689]/.test(v) && v.length > 1 && !isPrime(v)) r.push(+v);
      return r;
    },
    [],
  );
}

// <-- Best Solution -->
function notPrimes(a, b) {
  const arr = [];

  for (let i = a; i < b; i++) {
    if (!/[014689]/.test(i)) {
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          arr.push(i);
          break;
        }
      }
    }
  }

  return arr;
}
