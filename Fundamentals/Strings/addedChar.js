// <-- Three added Characters -->

/*
  Given two strings, the first being a random string and the second being the same as the first, but with three added characters somewhere in the string (three same characters),
  Write a function that returns the added character

  E.g
  string1 = "hello"
  string2 = "aaahello"
  // => 'a'
  The above is just an example; the characters could be anywhere in the string and string2 is actually shuffled.

  Another example
  string1 = "abcde"
  string2 = "2db2a2ec"
  // => '2'
*/

// <-- My Solution -->
function addedChar(s1, s2) {
  let s11 = [...s1].sort();
  let s22 = [...s2].sort();

  return s22.find((val, i) => val !== s11[i]);
}

// <-- Best Solution -->
function addedCharBest(s1, s2) {
  let code = 0;

  for (let i = 0; i < s2.length; i++)
    code += s2.charCodeAt(i) - ~~s1.charCodeAt(i);

  return String.fromCharCode(code / 3);
}
