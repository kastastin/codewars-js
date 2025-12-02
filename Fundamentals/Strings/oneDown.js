// <-- One down -->

/*
  A very passive-aggressive co-worker of yours was just fired. While he was gathering his things, he quickly inserted a bug into your system which renamed everything to what looks like jibberish. He left two notes on his desk, one reads: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" while the other reads: "Uif usjdl up uijt lbub jt tjnqmf kvtu sfqmbdf fwfsz mfuufs xjui uif mfuufs uibu dpnft cfgpsf ju".

  Rather than spending hours trying to find the bug itself, you decide to try and decode it.

  In case your language allows it and the input is not a string, your function must return "Input is not a string". Your function must be able to handle capital and lower case letters. You will not need to worry about punctuation.
*/

// <-- My Solution -->
function oneDown(str) {
  if (typeof str !== "string") {
    return "Input is not a string";
  }

  return str.replace(/[a-z]/gi, (match) => {
    const code = match.codePointAt(0);

    if (code === 97) {
      return "Z";
    } else if (code === 65) {
      return "z";
    } else {
      return String.fromCodePoint(code - 1);
    }
  });
}

// <-- Best Solution -->
function oneDown(str) {
  const alph = "zABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  return typeof str === "string"
    ? str.replace(/\w/g, (v) => alph.charAt(alph.lastIndexOf(v) - 1))
    : "Input is not a string";
}
