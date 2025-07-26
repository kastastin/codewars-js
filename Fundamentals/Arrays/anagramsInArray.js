// <-- Number of anagrams in an array of words -->

/*
  An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

  Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

  Some examples:

  There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
  There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
*/

// <-- My Solution -->
function anagramCounter(wordsArray) {
  let counter = 0;

  const arrSort = wordsArray.map((el) => el.toLowerCase().split("").sort());

  for (let i = 0; i < arrSort.length; i++) {
    for (let j = 0; j < arrSort.length; j++) {
      if (arrSort[i].join("") === arrSort[j].join("") && i !== j) {
        counter++;
      }
    }
  }

  return counter / 2;
}

// <-- Best Solution -->
function anagramCounterBest(arrayOfWords) {
  let numberOfAnagrams = 0;

  const sortedWords = arrayOfWords.map((word) => word.split("").sort().join(""));

  sortedWords.forEach((word, theIndex) => {
    for (let i = theIndex + 1; i < sortedWords.length; i++) {
      if (word === sortedWords[i]) {
        numberOfAnagrams++;
      }
    }
  });
  
  return numberOfAnagrams;
}
