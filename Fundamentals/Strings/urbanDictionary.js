// <-- Urban Dictionary -->

/*
  Design a data structure that supports the following two operations:

  addWord / add_word which adds a word,
  search which searches a literal word or a regular expression string containing lowercase letters "a-z" or "." where "." can represent any letter. Return true if the search term fully matches any word previously added; otherwise, return false.
  You may assume that all given words contain only lowercase letters.

  Examples
  addWord("bad")
  addWord("dad")
  addWord("mad")

  search("pad") === false
  search("bad") === true
  search(".ad") === true
  search("b..") === true
*/

class WordDictionary {
  constructor() {
    this.s = new Set();
  }

  addWord(word) {
    this.s.add(word);
  }

  search(word) {
    const r = new RegExp("^" + word + "$");

    for (const w of this.s.values()) {
      if (r.test(w)) {
        return true;
      }
    }

    return false;
  }
}
