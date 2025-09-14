// <-- Trumpness detector -->

/*
  For this reason we need to create a function to detect the original and unique rhythm of our beloved leader, typically having a lot of extra vowels, all ready to fight the establishment.

  The index is calculated based on how many vowels are repeated (case-insensitively) more than once in a row and dividing them by the total number of vowels a petty enemy of America would use.

  For example:

  "I will build a huge wall" --> 0 
  --> definitely not our trump: 0 on the trump score

  "HUUUUUGEEEE WAAAAAALL" --> 4
  --> 4 extra "U", 3 extra "E" and 5 extra "A" on 3 different vowels
  --> groups: 12/3 make for a trumpy trumping score of 4: not bad at all!

  "listen migrants: IIII KIIIDD YOOOUUU NOOOOOOTTT" --> 1.56 
  --> 14 extra vowels on 9 base ones give 1.55555555... which is rounded to 1.56
  Notes: vowels are only the ones in the patriotic group of "aeiou": "y" should go back to Greece if she thinks she can have the same rights of true American vowels; there is always going to be at least a vowel, as silence is the option of coward Kenyan/terrorist presidents and their friends.


*/

// <-- My Solution -->
function trumpDetector(trumpySpeech) {
  const vowels = trumpySpeech.match(/([aeiou])\1*/gi) || [];
  const sum = vowels.reduce((acc, s) => acc + s.length - 1, 0);

  return +(sum / vowels.length).toFixed(2);
}

// <-- Best Solution -->
function trumpDetectorBest(s) {
  const m = s.match(/([aeiou])(\1)*/gi);

  return +(m.join``.length / m.length - 1).toFixed(2);
}
