// <-- Reverse Vowels In A String -->

/*
  In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

  "Hello!" => "Holle!"
  "Tomatoes" => "Temotaos"
  "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
  For simplicity, you can treat the letter y as a consonant, not a vowel.
*/

// <-- My Solution -->
function reverseVowels(str) {
  const vs = str.match(/[aeiou]/gi);

  return vs === null ? str : str.replace(/[aeiou]/gi, (c) => vs.pop());
}
