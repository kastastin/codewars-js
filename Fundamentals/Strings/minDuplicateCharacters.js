// <-- Minimum difference in duplicate characters -->

/*
  Write a function that takes a string and finds a repeating character in the string (there may be multiple repeating characters). The function should return the minimum difference between the indices of these characters, and the character itself.

  For example, in the string "aabcba", the minimum position difference of repeated characters will be equal to 1, since for the character a, the position difference is 1.

  The output should be in the form of an array.

  If there are no duplicate characters in the string, it should return null.

  The string can only contain lowercase letters, and nothing else!!! (an empty string is not allowed).

  If the difference between repeated characters is the same, return the first minimal difference encountered.

  Examples of outputs:

  "aa" => new Object[]{1, 'a'}

  "aabbca" => new Object[]{1, 'a'}

  "abka" => new Object[]{3, 'a'}

  "abcded" => new Object[]{2, 'd'}

  "abbbbbc" => new Object[]{1, 'b'}

  "abc" => null
*/

// <-- My Solution -->
function minRepeatingCharacterDifference(text) {
  const characters = [...text];
  const differences = [];

  for (let i = 0; i < characters.length; i++) {
    const currentChar = characters[i];
    const nextIndex = characters.indexOf(currentChar, i + 1);

    if (nextIndex !== -1) {
      const diff = nextIndex - i;
      differences.push([currentChar, diff]);
      continue;
    }

    if (i === characters.length - 1 && differences.length === 0) return null;
  }

  const sortedDifferences = differences.sort((a, b) => a[1] - b[1]);

  return [sortedDifferences[0][1], sortedDifferences[0][0]];
}

// <-- Best Solution -->
function minRepeatingCharacterDifferenceBest(text) {
  let ch = "";
  let min = text.length;
  const positions = {};

  text.split("").forEach((v, i) => {
    const pos = positions[v];
    if (pos) {
      if (i - pos.index < min) {
        min = i - pos.index;
        ch = v;
      }

      pos.index = i;
    } else {
      positions[v] = { index: i };
    }
  });

  return min === text.length ? null : [min, ch];
}
