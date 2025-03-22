// <-- Case Reversal of Consecutive Duplicates -->

/*
  The aim of this Kata is to write a function which will reverse the case of all consecutive duplicate letters in a string. That is, any letters that occur one after the other and are identical.

  If the duplicate letters are lowercase then they must be set to uppercase, and if they are uppercase then they need to be changed to lowercase.

  Examples:

  "puzzles" --> "puZZles"
  "massive" --> "maSSive"
  "LITTLE"  --> "LIttLE"
  "shhh"    --> "sHHH"
  Arguments passed will include only alphabetical letters A–Z or a–z.
*/

// <-- My Solution -->
function reverseCase(s) {
  let ans = "";

  for (var i = 0; i < s.length; ++i)
    if (s[i] == s[i + 1] || s[i] == s[i - 1])
      if (s[i] == s[i].toLowerCase()) ans += s[i].toUpperCase();
      else ans += s[i].toLowerCase();
    else ans += s[i];

  return ans;
}

// <-- Best Solution -->
function reverseCaseBest(string) {
  return string.replace(/([a-zA-Z])\1+/g, (v) =>
    v.toLowerCase() === v ? v.toUpperCase() : v.toLowerCase(),
  );
}
