// <-- Missing Alphabet -->

/*
  In this Kata you have to create a function,named insertMissingLetters,that takes in a string and outputs the same string processed in a particular way.

  The function should insert only after the first occurrence of each character of the input string, all the alphabet letters that:

  -are NOT in the original string
  -come after the letter of the string you are processing

  Each added letter should be in uppercase, the letters of the original string will always be in lowercase.

  Example:

  input: "holly"

  missing letters: "a,b,c,d,e,f,g,i,j,k,m,n,p,q,r,s,t,u,v,w,x,z"

  output: "hIJKMNPQRSTUVWXZoPQRSTUVWXZlMNPQRSTUVWXZlyZ"

  You don't need to validate input, the input string will always contain a certain amount of lowercase letters (min 1 / max 50).
*/

// <-- My Solution -->
function insertMissingLetters(str) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";

  let res = "";

  for (let i = 0; i < str.length; i++) {
    if (i === str.indexOf(str[i])) {
      let missing = alpha.slice(alpha.indexOf(str[i]) + 1);

      missing = missing.replace(RegExp(`[${str}]`, "g"), "");
      res += str[i] + missing.toUpperCase();
    } else {
      res += str[i];
    }
  }

  return res;
}

// <-- Best Solution -->
function insertMissingLettersBest(str, charSet = "abcdefghijklmnopqrstuvwxyz") {
  return [...new Set(str.split(""))]
    .reduce((p, c) => p.replace(c, c + charSet.slice(charSet.indexOf(c) + 1).toUpperCase()), str)
    .replace(new RegExp("[" + str.toUpperCase() + "]", "g"), "");
}
