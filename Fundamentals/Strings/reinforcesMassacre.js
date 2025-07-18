// <-- Alphabet wars - reinforces massacre -->

/*
  Write a function that accepts reinforces array of strings and airstrikes array of strings.
  The reinforces strings consist of only small letters. The size of each string in reinforces array is the same.
  The airstrikes strings consists of * and white spaces. The size of each airstrike may vary. There may be also no airstrikes at all.

  The first row in reinforces array is the current battlefield. Whenever some letter is killed by bomb, it's replaced by a letter from next string in reinforces array on the same position.
  The airstrike always starts from the beginning of the battlefield.
  The * means a bomb drop place. The each * bomb kills letter only on the battelfield. The bomb kills letter on the same index on battlefield plus the adjacent letters.
  The letters on the battlefield are replaced after airstrike is finished.
  Return string of letters left on the battlefield after the last airstrike. In case there is no any letter left in reinforces on specific position, return _.

  reinforces = [ "abcdefg",
                "hijklmn"];
  airstrikes = [ "   *   ",
                "*  *   "];
                
  The battlefield  is     : "abcedfg".
  The first airstrike    : "   *   "  
  After first airstrike  : "ab___fg"
  Reinforces are comming : "abjklfg"
  The second airstrike   : "*  *   "
  After second airstrike : "_____fg"
  Reinforces are coming  : "hi___fg"
  No more airstrikes => return "hi___fg"
*/

// <-- My Solution -->
function alphabetWar(reinforces, airstrikes) {
  let soldiers = reinforces.map((line) => line.split(""));
  let battlefield = soldiers[0];

  airstrikes.forEach((strike) => {
    battlefield = battlefield.map((soldier, i) => {
      if (strike.slice((i || 1) - 1, i + 2).includes("*")) {
        for (let j = 1; j < soldiers.length; j++) {
          if (soldiers[j][i]) {
            let soldierToReturn = soldiers[j][i];
            soldiers[j][i] = undefined;

            return soldierToReturn;
          }
        }

        return "_";
      }
      
      return soldier;
    });
  });

  return battlefield.join("");
}

// <-- Best Solution -->
const alphabetWarBest = (reinforces, airstrikes) =>
  reinforces[0]
    .split("")
    .map(
      (_, i) =>
        (reinforces[
          airstrikes.filter((x) => x.substring(i - 1, i + 2).includes("*"))
            .length
        ] || {})[i] || "_",
    )
    .join("");
