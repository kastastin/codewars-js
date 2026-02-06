// <-- Valid string -->

/*
  You are given a sequence of valid words and a string. Test if the string is made up by one or more words from the array.

  Task
  Test if the string can be entirely formed by consecutively concatenating words of the dictionary.

  For example:

  dictionary: ["code", "wars"]

  s1:         "codewars" =>  true  -> match 'code', 'wars'
  s2:         "codewar"  =>  false -> match 'code', unmatched 'war'
*/

// <-- My Solution -->
function validWord(a, s) {
  for (const x of a) {
    if (s.startsWith(x) && validWord(a, s.slice(x.length))) {
      return true;
    }
  }

  return !s;
}

// <-- Best Solution -->
function validWordBest(dictionary, word) {
  reg = new RegExp("^(" + dictionary.join("|") + ")+$");
  
  return reg.test(word);
}
