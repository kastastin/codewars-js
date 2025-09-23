// <-- Unique Cuts -->

/*
  The function is given a string with lower-case characters. Split the string into as many non-empty substrings as possible, such that each character appears in only one substring. Return the list of lengths of the resulting substrings.

  Examples
  "abbccc" ➞ [1, 2, 3]
  # "a", "bb", "ccc"

  "abbacdceef" ➞ [4, 3, 2, 1]
  # "abba", "cdc", "ee", "f"

  "abacded" ➞ [3, 1, 3]
  # "aba", "c", "ded"

  "abcdea" ➞ [6]
  # "abcdea" because first letter is equal to the last letter.
*/

// <-- My Solution -->
function splitString(string) {
  const lastIndex = {};

  for (let i = 0; i < string.length; i++) {
    lastIndex[string[i]] = i;
  }

  const result = [];
  let start = 0;
  let end = 0;

  for (let i = 0; i < string.length; i++) {
    end = Math.max(end, lastIndex[string[i]]);

    if (i === end) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }

  return result;
}

// <-- Best Solution -->
function splitStringBest(string) {
  const res = [];
  const indices = [...string].reduce((r, x, i) => ((r[x] = i), r), {});

  for (let i = 0, max = 0, start = 0; i < string.length; i++) {
    max = Math.max(max, indices[string[i]]);

    if (i === max) {
      res.push(i - start + 1);
      start = i + 1;
    }
  }

  return res;
}
