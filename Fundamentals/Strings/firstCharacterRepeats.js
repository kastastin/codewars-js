// <-- First character that repeats -->

/*
  Find the first character that repeats in a String and return that character.

  firstDup('tweet') => 't'
  firstDup('like') => undefined
  This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.

  Another example:

  In 'translator' you should return 't', not 'a'.

  v      v  
  translator
    ^   ^
  While second 'a' appears before second 't', the first 't' is before the first 'a'.
*/

// <-- My Solution -->
function firstDup(s) {
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        return s[i];
      }
    }
  }
}

// <-- Best Solution -->
function firstDupBest(s) {
  return s[s.search(/(.).*\1/)];
}
