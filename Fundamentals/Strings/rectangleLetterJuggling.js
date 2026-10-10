// <-- Rectangle letter juggling -->

/*
  Given a string, output the encoded version of that string.

  Example:
  Input:
  'When nobody is around, the trees gossip about the people who have walked under them.'
  First, the input is normalized; Any character other than alphabetic characters should be removed from the text and the message is converted into lowercase. No digits will be passed as input. Only ASCII English letters (upper and lower case) and ASCII symbols will be in the string:

  !"#$%&'()*+, -./:;<=>?@[\]^_`{|}~
  The input is normalized into:
  'whennobodyisaroundthetreesgossipaboutthepeoplewhohavewalkedunderthem'
  The text is then organized into a rectangle of size (a * b) such that b >= a and b - a <= 1. The last row, if incomplete, should be padded with spaces. Since the length of the normalized text is 68, we use an 8*9 rectangle giving:

  'whennobod'
  'yisaround'
  'thetreesg'
  'ossipabou'
  'tthepeopl'
  'ewhohavew'
  'alkedunde'
  'rthem    '
  The final message is obtained by reading the rectangle down each column from left to right, and separated into b chunks of length a, separated by spaces. No characters other than lowercase English alphabets and spaces are to be used in the output.

  Output:
  'wytotear hihstwlt eseshhkh natieoee nrrpphdm ooeaeau  buebovn  onsoped  ddgulwe ' 
*/

// <-- Solution -->
function cipherText(plainText) {
  const normalizedText = plainText.replace(/[^a-z]/gi, "").toLowerCase();

  const W = Math.ceil(normalizedText.length ** 0.5);
  const H = Math.ceil(normalizedText.length / W) + 1;

  return " ".repeat(W * H - 1).replace(/./g, (_, i) => normalizedText[((i % H) * W + i / H) ^ 0] ?? " ");
}
