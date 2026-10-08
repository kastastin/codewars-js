// <-- Longest 2-character substring -->

/*
  Find the longest substring within a string that contains at most 2 unique characters.

  "a" => "a"
  "aaa" => "aaa"
  "abacd" => "aba"
  "abacddcd" => "cddcd"
  "cefageaacceaccacca" => "accacca"
  This function will take alphanumeric characters as input.

  In cases where there could be more than one correct answer, the first string occurrence should be used. For example, 'abc' should return 'ab' instead of 'bc'.

  Although there are O(N^2) solutions to this problem, you should try to solve this problem in O(N) time. Tests may pass for O(N^2) solutions but, this is not guaranteed.

  This question is much harder than some of the other substring questions. It's easy to think that you have a solution and then get hung up on the implementation.
*/

// <-- Solution -->
function substring(str) {
  let longest = "";

  for (let i = 0, substr = ""; i < str.length; i++, substr = "") {
    const letters = new Set(str[i]);

    while (str[i] && letters.size <= 2) {
      substr += str[i];
      letters.add(str[++i]);
    }

    substr.length > longest.length && (longest = substr);

    while (str[i] && str[--i] === substr.at(-1));
  }

  return longest;
};
