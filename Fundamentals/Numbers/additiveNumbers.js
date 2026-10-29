// <-- Additive Numbers -->

/*
  Additive number is a string whose digits can form an additive sequence.

  Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

  For example:
  "112358" is an additive number because the digits can form an additive sequence: 1, 1, 2, 3, 5, 8

  1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8

  Write function findAdditiveNumbers(num)
  that will take in a string and return all the numbers that make up the sequence.


  findAdditiveNumbers('112358') === ['1','1','2','3','5','8']
  findAdditiveNumbers('199100199') === ['1','99','100','199']
  findAdditiveNumbers('1023') === []
  findAdditiveNumbers('112356') === [] // 6 != 5+3
*/

// <-- My Solution -->
function findAdditiveNumbers(num) {
  function check(i, j, num) {
    const arr = [+num.slice(0, i), +num.slice(i, j)];
    i = 0;
    num = num.slice(j);

    while (num) {
      const next = arr[i] + arr[i + 1] + "",
        l = next.length;

      if (num.slice(0, l) != next) {
        return false;
      }

      arr.push(+next);
      ++i;
      num = num.slice(l);
    }

    return arr.map((x) => "" + x);
  }

  const l = num.length;

  for (let i = 1; i <= l / 2; ++i) {
    for (let j = i + 1; j <= (l * 2) / 3; ++j) {
      const result = check(i, j, num);

      if (result) {
        return result;
      }
    }
  }

  return [];
}
