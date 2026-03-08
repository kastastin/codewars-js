// <-- Decipher this -->

/*
  You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

  For each word:
  the second and the last letter is switched (e.g. Hello becomes Holle)
  the first letter is replaced by its character code (e.g. H becomes 72)
  there are no special characters used, only letters and spaces
  words are separated by a single space
  there are no leading or trailing spaces

  Examples:
  '72olle 103doo 100ya' --> 'Hello good day'
  '82yade 115te 103o'   --> 'Ready set go'
*/

// <-- Solution -->
function decipherThis(str) {
  let res = [];
  const words = str.split(" ");

  words.forEach((cipher) => {
    const code = cipher.match(/^\d+/);
    const word = cipher.replace(code, String.fromCharCode(code));

    if (word.length > 2) {
      const arr = word.split("");
      arr[1] = word.slice(-1);
      arr[arr.length - 1] = word.slice(1, 2);
      res.push(arr.join(""));
    } else {
      res.push(word);
    }
  });

  return res.join(" ");
}
