// <-- Life without primes -->

/*
  Consider an array that has no prime numbers, and none of its elements has any prime digit. It would start with: [1,4,6,8,9,10,14,16,18,40,44..].

  12 and 15 are not in the list because 2 and 5 are primes.

  You will be given an integer n and your task will be return the number at that index in the array. For example:

  solve(0) = 1
  solve(2) = 6
*/

// <-- My Solution -->
function solve(n) {
  let i = 2;
  let counter1 = 1;
  const simpleDigits = [2, 3, 5, 7];

  while (counter1 <= n) {
    for (let x = 0; x < simpleDigits.length; x++) {
      if (String(i).indexOf(String(simpleDigits[x])) != -1) {
        i =
          i +
          Math.pow(
            10,
            String(i).length - 1 - String(i).indexOf(String(simpleDigits[x])),
          );
      }
    }

    let notPrime = 0;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        counter1++;
        notPrime++;
        break;
      }
    }

    if (counter1 == n + 1) break;

    i++;
  }
  
  return i;
}

// <-- Best Solution -->
function solve(n, curr = 1) {
  if (!n) return curr;

  while (isPrime(++curr) || /[2357]/.test(curr)) {}

  return solve(n - 1, curr);
}

const isPrime = (num) => {
  if (num % 2 == 0) return false;

  const sqrt = Math.sqrt(num);

  for (let i = 3; i <= sqrt; i += 2) if (num % i == 0) return false;

  return true;
};
