// <-- Word Challenges at School -->

/*
  The principal of a school likes to put challenges to the students related with finding words of certain features. One day she said: "Dear students, the challenge for today is to find a word that has only one vowel and seven consonants but cannot have the letters "y" and "m". I'll give a special award for the first student that finds it." One of the students used his dictionary and spent all the night without sleeping, trying in vain to find the word. The next day, the word had not been found yet. This student observed that the principal has a pattern in the features for the wanted words:

  The word should have n vowels, may be repeated, for example: in "engineering", n = 5.
  The word should have m consonants, may be repeated also: in "engineering", m = 6.
  The word should not have some forbidden letters (in an array), forbid_letters.
  Vowels are a, e, i, o, and u.
  You will be provided with a list of words, WORD_LIST(python/crystal), wordList(javascript), wordList (haskell), $word_list(ruby), and you have to create the function, wanted_words(), that receives the three arguments in the order given above, wanted_words(n, m, forbid_list) and output an array with the word or an array, having the words in the order given in the pre-loaded list, in the case of two or more words were found.

  Let's see some cases:
  wantedWords(1, 7, ["m", "y"]) == ["strength"]
  wantedWords(3, 7, ["m", "y"]) == ['afterwards', 'background', 'photograph', 'successful', 'understand']

  For cases where no words are found the function will output an empty array.
  wantedWords(3, 7, ["a", "s" , "m", "y"]) == []
*/

// <-- My Solution -->
function wantedWords(n, m, forbid_let) {
  const totalLength = n + m;
  const vowels = ["a", "e", "i", "o", "u"];

  return wordList.filter((word) => {
    if (word.length !== totalLength) {
      return false;
    }

    if (forbid_let.some((l) => word.includes(l))) {
      return false;
    }

    let cons = 0;
    let vowel = 0;

    for (const l of word) {
      if (vowels.includes(l)) {
        vowel++;
      } else {
        cons++;
      }
    }

    return vowel === n && cons === m;
  });
}

// <-- Best Solution -->
function wantedWordsBest(n, m, forbid_let) {
  return wordList.filter(
    (e) =>
      e.length - e.replace(/[^euioa]/g, "").length == m &&
      e.length - e.replace(/[euioa]/g, "").length == n &&
      forbid_let.every((x) => e.indexOf(x) == -1),
  );
}
