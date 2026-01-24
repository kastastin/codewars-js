// <-- Derive Cipher from Plaintext -->

/*
  This is a substitution cipher kata with a twist. You will be given two string arguments. The first argument is a rather lengthy nonsensical text in plaintext form. The second argument is a shorter encoded string. Your task is to derive the cipher from the plaintext, then apply it to decipher the encoded string.

  How to derive the cipher: Create an object in which the keys are all of the lower-case letters of the English alphabet, in alphabetical order. To each of these keys, assign the next unique letter from the plaintext (case-insensitive). In other words, the order of the substituted values is the order in which the letters first occur in the plaintext.

  Here's a partial example: Plaintext: "Despite the constant negative press covfefe, my goal is to promote the possibility of lasting peach in the region in an unpresidented act. I hearby tapp DeBois' phones... "

  In this example, the first part of the cipher would look like: {"a":"d", "b":"e", "c":"s", "d":"p", "e":"i", "f":"t", "g":"h", "h":"c", "i":"o", "j":"n" [etc.]}

  This represents the cipher that was used to encode the second argument. To decipher it, you would apply the cipher in reverse (i.e., turn "d" back into "a", "e" back into "b", etc.). Finally, return the deciphered string.

  You can assume that all letters of the alphabet will be included in the plaintext. Non-letters should be left in place, unchanged. Please note that any upper-case letters in the encoded string would remain unchanged.
*/

// <-- Solution -->
function cipherFromPlaintext(key, text) {
  key = [...new Set(key.toLowerCase().replace(/[^a-z]/g, ""))];

  return text.replace(/[a-z]/g, (c) => String.fromCharCode(97 + key.indexOf(c)));
}
