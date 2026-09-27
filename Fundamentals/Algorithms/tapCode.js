// <-- Tap Code -->

/*
  I learned about this after watching 'The Flash' season 2 episode 13, there are 2 prisoners in adjacent cells communicating using what they call a 5x5 tap code.

  The way it works is the user taps up to 5 times to signal a coresponding row and then once again to signal a corresponding column.

  Example
  Using a hypothetical 2x2 tap code the grid would be:

  A	B
  C	D
  Tapping twice then once would point to the letter 'C'.	
  Tapping once then once would point to 'A'...	
  Instructions
  Your task is to write a tapFive object that has two functions, encrypt and decrypt which uses a 5x5 tap code to decrypt and encrypt the passed in string.

  Encrypt
  The encrypt method should take a string representing the word/sentence to encrypt, and return a string with the encrypted value. It can take a sentence with spaces (will ignore them) and the case shouldn't matter.

  Example
  tapfive.encrypt("hello") === "2315313134"
  ##Decrypt ##

  The decrypt method should take a string representing an encoded word/sentence. It will contain only numbers such as '2315313134' for the word 'HELLO'. The output will always be in caps.

  Example
  tapfive.decrypt("2315313134") === "HELLO"
  Catch
  If you've noticed there are 26 letters in the alphabet (A...Z) and all must be encryptable, however in a 5x5 grid theres only enough room for 25 letters.

  Hint / Spoiler
  tapFive.encrypt("JAWBREAKERS") === '2511521242151113154243';
  tapFive.decrypt("2511521242151113154243") === "JAWBREACERS";
*/

// <-- Solution -->
const chars = ".......ABCDE.FGHIJ.LMNOP.QRSTU.VWXYZ";

const tapFive = {
  encrypt: (s) =>
    s.replace(/./g, (c) => (c == " " ? "" : chars.indexOf(c.toUpperCase().replace("K", "C")).toString(6))),
  decrypt: (s) => s.replace(/../g, (c) => chars[Number.parseInt(c, 6)]),
};
