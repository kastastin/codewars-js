// <-- Vertical Histogram Of Letters -->

/*
  You are given a string s. Your task is to count the number of each letter (A-Z), and make a vertical histogram as result. Look at the following examples to understand the rules.

  Example
  For s = "XXY YY ZZZ123ZZZ AAA BB C", the output should be:

            *
            *
            *
  *       * *
  * *   * * *
  * * * * * *
  A B C X Y Z
  Rules
  You just need to count the uppercase letters. Any other character will be ignored.
  Using * to represent the number of characters.
  The order of output is form A to Z. Characters that do not appear in the string are ignored.
  To beautify the histogram, there is a space between every pair of columns.
  There are no extra spaces at the end of each row. Also, use "\n" to separate rows.
*/

// <-- Solution -->
function verticalHistogramOf(s) {
  const data = {};

  for (const char of s) {
    if (/[A-Z]/.test(char)) {
      data[char] = (data[char] || 0) + 1;
    }
  }

  const letters = Object.keys(data).sort();
  const max = Math.max(...Object.values(data));

  const rows = [];
  for (let i = 0; i < max; i++) {
    const row = [];

    for (let letter of letters) {
      if (max - i - 1 >= data[letter]) {
        row.push(" ");
      } else {
        row.push("*");
      }
    }

    rows.push(row.join(" ").trimEnd());
  }
  
  rows.push(letters.join(" "));

  return rows.join("\n");
}
