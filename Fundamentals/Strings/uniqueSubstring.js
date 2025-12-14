// <-- Unique Substring From Joined Strings -->

/*
  Write a function that takes two strings, A and B, and returns the length of the longest possible substring that can be formed from the concatenation of either A + B or B + A containing only characters that do not appear in both A and B.

  Example:
  Given the strings "piquancy" and "refocusing":
  A = "piquancy"
  B = "refocusing"
  A + B = "piquancyrefocusing"
  B + A = "refocusingpiquancy"

  Since 'i', 'n', 'u', and 'c' appear in both A and B, all acceptable substrings without those characters are:
  "p", "q", "a", "yrefo", "s", "g" (from A + B)
  "refo", "s", "gp", "q", "a", "y" (from B + A)

  Therefore, it would be correct to return 5: the length of "yrefo".
*/

// <-- Solution -->
function longestExclusiveSubstringLength(a, b) {
  const setA = new Set(a.split(""));
  const setB = new Set(b.split(""));
  const common = new Set();

  for (const ch of setA) {
    if (setB.has(ch)) {
      common.add(ch);
    }
  }

  const maxFrom = (s) => {
    let maxLen = 0;
    let currentLen = 0;

    for (const ch of s) {
      if (!common.has(ch)) {
        currentLen++;
      } else {
        if (currentLen > maxLen) {
          maxLen = currentLen;
        }

        currentLen = 0;
      }
    }

    if (currentLen > maxLen) {
      maxLen = currentLen;
    }

    return maxLen;
  };

  return Math.max(maxFrom(a + b), maxFrom(b + a));
}
