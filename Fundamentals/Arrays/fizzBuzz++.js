// <-- FizzBuzz++ -->

/*
  Surprised by your ability, the interviewer gives you a harder problem. Given a list of coprime numbers, (that is that the greatest common divisor of all the numbers = 1) and an equally sized list of words, compute its fizzbuzz representation up until the pattern of strings repeats itself.

  Notes:

  Your function should return a list/array, not print it.
  The list of numbers should start from 1.
  The strings are always concatenated from left to right in the appearance of the given list of words.
  The list of numbers may not always be sorted - just use the given order of the numbers.
  All numbers in the first array will always be coprime. This is a safe assumption for your program.
  The list stops where it does because if you were to filter the numbers out, the remaining strings would repeat after this point.
  Hint: What is the relation to the numbers given in the list and the length of the list?

  Example
  fizzbuzz_plusplus([2, 3, 5], ['fizz', 'buzz', 'bazz'])
  should return

  [1, 'fizz', 'buzz', 'fizz', 'bazz', 'fizzbuzz', 7, 'fizz', 'buzz', 'fizzbazz', 11, 'fizzbuzz', 13, 'fizz', 'buzzbazz', 'fizz', 17, 'fizzbuzz', 19, 'fizzbazz', 'buzz', 'fizz', 23, 'fizzbuzz', 'bazz', 'fizz', 'buzz', 'fizz', 29 , 'fizzbuzzbazz']
*/

// <-- My Solution -->
function fizzbuzzPlusPlus(numbers, words) {
  const result = [];
  let n = 1;

  for (number of numbers) {
    n *= number;
  }

  for (let i = 1; i <= n; i++) {
    const newWords = [];

    for (j = 0; j < words.length; j++) {
      if (i % numbers[j] === 0) {
        newWords.push(words[j]);
      }
    }

    if (newWords.length === 0) {
      result.push(i);
    } else {
      result.push(newWords.join(""));
    }
  }

  return result;
}

// <-- Best Solution -->
const fizzbuzzPlusPlusBest = (numbers, words) =>
  Array.from(
    { length: numbers.reduce((fizz, buzz) => fizz * buzz) },
    (_, bazz) =>
      numbers.reduce(
        (fizz, buzz, bizz) => fizz + ((bazz + 1) % buzz ? "" : words[bizz]),
        "",
      ) || bazz + 1,
  );
