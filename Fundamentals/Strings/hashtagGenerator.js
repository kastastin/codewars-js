// <-- Hashtag Generator -->

/*
  The marketing team is spending way too much time typing in hashtags.
  Let's help them with our own Hashtag Generator!

  Here's the deal:

  It must start with a hashtag (#).
  All words must have their first letter capitalized.
  If the final result is longer than 140 chars it must return false.
  If the input or the result is an empty string it must return false.

  Examples
  " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
  "    Hello     World   "                  =>  "#HelloWorld"
  ""                                        =>  false
*/

// <-- My Solution -->
function generateHashtag(str) {
  if (!str.trim()) {
    return false;
  }

  const result =
    "#" +
    str
      .split(" ")
      .map((l) => l.charAt(0).toUpperCase() + l.slice(1))
      .join("");

  return result.length > 140 ? false : result;
}

// <-- Best Solution -->
function generateHashtagBest(str) {
  str = str.split(" ").reduce(function (p, c) {
    return p + (c ? c[0].toUpperCase() + c.slice(1) : "");
  }, "#");

  return str.length > 140 || str == "#" ? false : str;
}
