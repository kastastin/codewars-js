// <-- Data compression using run-length encoding -->

/*
  Run-length encoding (RLE) is a very simple form of lossless data compression in which runs of data are stored as a single data value and count.

  A simple form of RLE would encode the string "AAABBBCCCD" as "3A3B3C1D" meaning, first there are 3 A, then 3 B, then 3 C and last there is 1 D.

  Your task is to write a RLE encoder and decoder using this technique. The texts to encode will always consist of only uppercase characters, no numbers.
*/

// <-- Solution -->
function encode(input) {
  let encodeStr = "";
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    count++;

    if (input[i] !== input[i + 1]) {
      encodeStr += count + input[i];
      count = 0;
    }
  }

  return encodeStr;
}

function decode(input) {
  let decodeStr = "";
  let quantChar = "";

  for (let i = 0; i < input.length; i++) {
    if (!isNaN(input[i])) {
      quantChar += input[i];
      continue;
    }

    decodeStr += input[i].repeat(Number(quantChar));
    quantChar = "";
  }

  return decodeStr;
}
