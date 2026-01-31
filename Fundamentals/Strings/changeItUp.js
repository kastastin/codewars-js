// <-- Change it up -->

/*
  Create a function that takes a string as a parameter and does the following, in this order:

  Replaces every letter with the letter following it in the alphabet (see note below)
  Makes any vowels capital
  Makes any consonants lower case
  Note:

  the alphabet should wrap around, so Z becomes A
  in this kata, y isn't considered as a vowel.
  So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)
*/

// <-- Solution -->
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const vowels = "aeiou";

function changer(str) {
  return str.replace(/[a-zA-Z]/g, (m) => {
    const idx = alphabet.indexOf(m.toLowerCase());
    const c1 = alphabet[idx === 25 ? 0 : idx + 1];
    
    return vowels.includes(c1) ? c1.toUpperCase() : c1;
  });
}
