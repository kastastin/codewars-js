// <-- Caesar Cipher -->

/*
  Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

  For example:

  var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
  c.encode('Codewars'); // returns 'HTIJBFWX'
  c.decode('BFKKQJX'); // returns 'WAFFLES'
  If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
  The shift will always be in range of [1, 26].
*/

// <-- My Solution -->
const CaesarCipher = function (shift) {
  const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  this.encode = function (str) {
    return str.replace(/[a-z]/gi, function (s) {
      return a[(a.indexOf(s.toUpperCase()) + shift) % 26];
    });
  };

  this.decode = function (str) {
    return str.replace(/[a-z]/gi, function (s) {
      return a[(a.indexOf(s.toUpperCase()) + 26 - shift) % 26];
    });
  };
};

// <-- Best Solution -->
const CaesarCipherBest = function (shift) {
  const code = (str, shift) =>
    str
      .toUpperCase()
      .replace(/[A-Z]/g, (val) =>
        String.fromCharCode(65 + ((val.charCodeAt() + shift - 65) % 26))
    );
  
  this.encode = (str) => code(str, shift);
  this.decode = (str) => code(str, 26 - shift);
};
