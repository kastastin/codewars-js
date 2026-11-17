// <-- Pro-nouncable Quint-uplets -->

/*
  Proquints (pronouncable quintuplets) are a scheme for mapping 16-bit integers to five letter words. The consonants "bdfghjklmnprstvz" map to the numbers 0 to 15, and the vowels "aiou" map to the numbers 0 to 3.

            #            111111
            #  0123456789012345
  consonants = "bdfghjklmnprstvz"
        #  0123
  vowels = "aiou"
  This means that a consonant can be represented with 4 bits, and a vowel can be represented with 2 bits, making the pattern consonant-vowel-consonant-vowel-consonant exactly 16 bits long.

      MSB                         LSB
      |0 1 1 0|0 0|1 1 0 1|0 0|1 1 0 0| = 25420
      +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
      |con    |vo |con    |vo |con    |
      +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
      \       /\  /\     /\  /\       /
        'k'    'a'  't'  'a'    's'
        \                          /
                  "katas"
  Numbers are assumed to be 32-bit unsigned integers, so in proquint representation they are written as two proquints separated with a dash. For example, the number 3880194936 is written in proquint form as "vital-datum".

  Your task is to write functions which convert between a 32-bit unsigned integer and its proquint string representation.

  Converting to proquint will be tested with random integers in the range [0:0xffffffff]
  Converting from proquint will be tested with random strings of the form "CVCVC-CVCVC".
*/

// <-- My Solution -->
const consonants = "bdfghjklmnprstvz",
  vowels = "aiou";

/** @param {string} proquint */
function fromProquint(proquint) {
  return [...proquint].reduce(
    (r, x, i) => (x === "-" ? r : i % 2 ? r * 4 + vowels.indexOf(x) : r * 16 + consonants.indexOf(x)),
    0,
  );
}

/** @param {number} number */
function toProquint(number) {
  const quint = (n) =>
    [4, 2, 4, 2, 4].reduce(
      ([n, r], k, i) => [n >>> k, (i % 2 ? vowels : consonants)[n & (2 ** k - 1)] + r],
      [n, ""],
    )[1];
  return quint(number >>> 16) + "-" + quint(number & 0xffff);
}
