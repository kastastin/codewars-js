// <-- Keyword Cipher -->

/*
  Third day at your new cryptoanalyst job and you come across your toughest assignment yet. Your job is to implement a simple keyword cipher. A keyword cipher is a type of monoalphabetic substitution where two parameters are provided as such (string, keyword). The string is encrypted by taking the keyword, dropping any letters that appear more than once. The rest of the letters of the alphabet that aren't used are then appended to the end of the keyword.

  For example, if your string was "hello" and your keyword was "wednesday", your encryption key would be 'wednsaybcfghijklmopqrtuvxz'.

  To encrypt 'hello' you'd substitute as follows,

                abcdefghijklmnopqrstuvwxyz
    hello ==>   |||||||||||||||||||||||||| ==> bshhk
                wednsaybcfghijklmopqrtuvxz
  hello encrypts into bshhk with the keyword wednesday. This cipher also uses lower case letters only.
*/

// <-- My Solution -->
function keywordCipher(string, keyword) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const wordToCipher = string.toLowerCase().split("");
  const alphabetArray = Array.from(alphabet.split(""));
  const keywordCipherAlphabet = Array.from(
    new Set((keyword.toLowerCase() + alphabet).split("")),
  );

  let cipherMapObject = Object.fromEntries(
    alphabetArray.map((elem, index) => {
      return [elem, keywordCipherAlphabet[index]];
    }),
  );

  return wordToCipher
    .map((elem) => {
      return elem == " " ? " " : cipherMapObject[elem];
    })
    .join("");
}

// <-- Best Solution -->
function keywordCipher(string, keyword) {
  const letter = "abcdefghijklmnopqrstuvwxyz";
  const newKey = [...new Set(keyword + letter)];

  return string
    .toLowerCase()
    .replace(/[a-z]/g, (x) => newKey[letter.indexOf(x)]);
}
