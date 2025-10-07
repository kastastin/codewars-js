// <-- String subpattern recognition -->

/*
  In this kata you need to build a function to return either true/True or false/False if a string can be seen as the repetition of a simpler/shorter subpattern or not.

  For example:

  hasSubpattern("a") === false; //no repeated pattern
  hasSubpattern("aaaa") === true; //created repeating "a"
  hasSubpattern("abcd") === false; //no repeated pattern
  hasSubpattern("abababab") === true; //created repeating "ab"
  hasSubpattern("ababababa") === false; //cannot be entirely reproduced repeating a pattern

  Strings will never be empty and can be composed of any character (just consider upper- and lowercase letters as different entities) and can be pretty long (keep an eye on performances!).
*/

// <-- My Solution -->
function hasSubpattern(string) {
  const r = /^([a-zA-Z0-9]+)(\1)+$/gm;
  const result = r.exec(string);

  return string.length % (result || [1, 1])[1].length === 0;
}

// <-- Best Solution -->
function hasSubpatternBest(string) {
  return string.match(/^(.*)\1+$/) !== null;
}
