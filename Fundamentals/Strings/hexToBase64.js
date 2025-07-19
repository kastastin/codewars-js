// <-- Hex to base64 -->

/*
  Convert hex-encoded (https://en.wikipedia.org/wiki/Hexadecimal) string to base64 (https://en.wikipedia.org/wiki/Base64)

  Example:

  The string:

  49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d

  Should produce:

  SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t
*/

// <-- My Solution -->
function hexToBase64(hex) {
  const bytes = [];

  for (let i = 0; i < hex.length; i += 2) {
    bytes.push(parseInt(hex.substr(i, 2), 16));
  }

  const binary = String.fromCharCode.apply(null, bytes);

  return btoa(binary);
}

// <-- Best Solution -->
function hexToBase64Best(hex) {
  return Buffer.from(hex, "hex").toString("base64");
}
