// <-- Base Conversion -->

/*
  In this kata you have to implement a base converter, which converts positive integers between arbitrary bases / alphabets. Here are some pre-defined alphabets:

  var Alphabet = {
    BINARY:        '01',
    OCTAL:         '01234567',
    DECIMAL:       '0123456789',
    HEXA_DECIMAL:  '0123456789abcdef',
    ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
    ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  };

  The function convert() should take an input (string), the source alphabet (string) and the target alphabet (string). You can assume that the input value always consists of characters from the source alphabet. You don't need to validate it.

  Examples
  convert between numeral systems
  convert("15", Alphabet.DECIMAL, Alphabet.BINARY); // should return "1111"
  convert("15", Alphabet.DECIMAL, Alphabet.OCTAL); // should return "17"
  convert("1010", Alphabet.BINARY, Alphabet.DECIMAL); // should return "10"
  convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL); // should return "a"

  other bases
  convert("0", Alphabet.DECIMAL, Alphabet.ALPHA); // should return "a"
  convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER); // should return "bb"
  convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); // should return "320048"
  convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER); // should return "SAME"
*/

// <-- Solution -->
function convert(input, source, target) {
  if (source === target) return input;

  let value = 0;
  for (const char of input) {
    value = value * source.length + source.indexOf(char);
  }

  let result = "";
  do {
    result = target[value % target.length] + result;
    value = Math.floor(value / target.length);
  } while (value > 0);

  return result;
}
