// <-- Digitwise addition -->

/*
  Digitwise addition is a special kind of addition where instead of adding 1 normally to the number, it adds 1 to every digit of that number. If the digit is a 9, we replace it with a 10 without carrying over to the next digit.

  Examples
  123 -> 234
  910 -> 1021
  789 -> 8910
  Task
  Program a function that takes two numbers, n and k, and outputs the number of digits in n after applying Digitwise addition k times. Since the answer can be very large, return the answer modulo 1_000_000_007.

  Your solution is expected to be O(klogn).

  Examples
  (9812, 2) -> 6
  # Explanation:
  # 9812 -> 10923 -> 211034 -> 6 digits

  (9899, 3) -> 8
  # Explanation:
  # 9899 -> 1091010 -> 21102121 -> 32213232 -> 8 digits
*/

// <-- My Solution -->
function digitwiseAddition(n, k, MOD = 1_000_000_007) {
  let arr = new Array(10).fill(0);

  for (let c of n + "") arr[+c] += 1;

  while (k-- > 0) {
    arr = [arr[9], ...arr.slice(0, 9)];
    arr[1] += arr[0];
    arr = arr.map((n) => n % MOD);
  }

  return arr.reduce((x, y) => x + y, 0) % MOD;
}

// <-- Best Solution -->
function digitwiseAdditionBest(N, K) {
  const MOD = 10 ** 9 + 7;
  let digits = new Array(10).fill(0);
  [...`${N}`].forEach((digit) => digits[+digit]++);

  while (K--) {
    digits.unshift(digits.pop());
    digits[1] = (digits[1] + digits[0]) % MOD;
  }

  return digits.reduce((sum, count) => sum + count, 0) % MOD;
}
