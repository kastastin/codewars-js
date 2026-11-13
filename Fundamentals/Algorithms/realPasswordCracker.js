// <-- Real Password Cracker -->

/*
  You are a h4ck3r n00b: you "acquired" a bunch of password hashes, and you want to decypher them. Based on the length, you already guessed that they must be SHA-1 hashes. You also know that these are weak passwords: maximum 5 characters long and use only lowercase letters (a-z), no other characters.

  Happy hacking!

  Notes:

  pre-generating the full hash table is not advised, due to the time-limit on the CW platform
  there will be only a few tests for 5-letter words (hint: start from the beginning of the alphabet)
  if your solution times out, try running it again - the CW runner is sometimes a bit slow(er)
*/

// <-- My Solution -->
const crypto = require("crypto");

const ALPHA = Array.from({ length: 26 }, (_, idx) => String.fromCharCode(idx + "a".charCodeAt()));

const alphagen = function* (len) {
  if (!len) {
    yield "";
    return;
  }

  for (const ch of ALPHA) {
    const gen = alphagen(len - 1);

    let next;
    while (!(next = gen.next()).done) yield ch + next.value;
  }
};

const passwordCracker = (hash) => {
  for (let i = 1; ; i++) {
    const gen = alphagen(i);

    let next;
    while (!(next = gen.next()).done) {
      if (crypto.createHash("sha1").update(next.value).digest("hex") === hash) return next.value;
    }
  }
};
