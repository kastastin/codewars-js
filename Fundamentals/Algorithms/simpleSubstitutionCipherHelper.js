// <-- Simple Substitution Cipher Helper -->

/*
  A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

  E.g.
  const abc1 = "abcdefghijklmnopqrstuvwxyz";
  const abc2 = "etaoinshrdlucmfwypvbgkjqxz";
    
  const sub = new SubstitutionCipher(abc1, abc2);
  sub.encode("abc") // => "eta"
  sub.encode("xyz") // => "qxz"
  sub.encode("aeiou") // => "eirfg"
    
  sub.decode("eta") // => "abc"
  sub.decode("qxz") // => "xyz"
  sub.decode("eirfg") // => "aeiou"
*/

// <-- My Solution -->
function SubstitutionCipher(abc1, abc2) {
  this.substitute = function (str, currentAbc, targetAbc) {
    let encoded = "";

    for (var i = 0; i < str.length; i++) {
      encoded += targetAbc[currentAbc.indexOf(str[i])] || str[i];
    }

    return encoded;
  };

  this.encode = function (str) {
    return this.substitute(str, abc1, abc2);
  };

  this.decode = function (str) {
    return this.substitute(str, abc2, abc1);
  };
}

// <-- Best Solution -->
function SubstitutionCipher(a, b) {
  this.encode = (str) => str.replace(/./g, (val) => b[a.indexOf(val)] || val);
  this.decode = (str) => str.replace(/./g, (val) => a[b.indexOf(val)] || val);
}
