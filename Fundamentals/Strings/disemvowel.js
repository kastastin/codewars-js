// <-- Disemvowel Trolls -->

/*
  Your task is to write a function that takes a string and return a new string with all vowels removed.
  For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

  Note: for this kata y isn't considered a vowel.
*/

// <-- My Solution -->
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

// <-- Best Solution -->
function disemvowelBest(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  return str
    .split("")
    .filter((vowel) => vowels.indexOf(vowel.toLowerCase()) == -1)
    .join("");
}
console.log(100 % 150);
