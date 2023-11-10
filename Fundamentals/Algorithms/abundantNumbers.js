// <-- Abundant Numbers -->

/*
  In number theory, an abundant number or an excessive number is one for which the sum of it's proper divisors is greater than the number itself. The integer 12 is the first abundant number. Its proper divisors are 1, 2, 3, 4 and 6 for a total of 16. The amount by which the sum exceeds the number is the abundance. The number 12 has an abundance of 4, for example. Other initial abundant numbers are : 12, 18, 20, 24, 30, 36, 40, 42, 48, 54 etc . Infinitely many odd and even abundant numbers exist.
  As you should have guessed by now, in this kata your function will take a positive integer h as range input and return a nested array/list that will contain the following informations-

  Highest available odd or even abundant number in that range
  It's abundance
  Examples
  A few examples never hurt nobody, right???

  abundant(15)  = [[12], [4]]
  abundant(19)  = [[18], [3]]
  abundant(100) = [[100], [17]]
  abundant(999) = [[996], [360]]
*/

// <-- My Solution -->
function abundant(h) {
  let num;

  for (let i = 0; i < h; i++) {
    let arrDel = [];
    num = h - i;

    for (let j = 1; j <= num / 2; j++) {
      if (num % j === 0) {
        arrDel.push(j);
      }
    }

    let sum = arrDel.reduce((acc, el) => (acc += el));
    if (sum > num) {
      return [[num], [sum - num]];
    }
  }
}

// <-- Best Solution -->
function abundantBest(h) {
  for (n = h; n >= 12; n--) {
    const divisors = [];

    for (let d = 1; d <= n / 2; d++) {
      if (n % d === 0) {
        divisors.push(d);
      }
    }

    const sum = divisors.reduce((acc, n) => acc + n, 0);

    if (sum > n) {
      return [[n], [sum - n]];
    }
  }
}
