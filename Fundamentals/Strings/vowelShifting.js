// <-- Vowel Shifting -->

/*
  You get a text and have to shift the vowels by n positions to the right. (Negative value for n should shift to the left.)

  Position means the vowel's position if taken as one item in a list of all vowels within the string.

  A shift by 1 would mean, that every vowel shifts to the place of the next vowel.

  Shifting over the edges of the text should continue at the other edge.

  Vowels are "aeiou" / "AEIOU".

  If text is null or empty, then simply return back the original text.

  Example:
  text = "This is a test!"
  n = 1
  output = "Thes is i tast!"

  text = "This is a test!"
  n = 3
  output = "This as e tist!"
*/

// <-- My Solution -->
function vowelShift(text, n) {
  if (text === null) return text;

  const c = text.match(/[aiueo]/gi);

  let x = 0;

  while (n > 0) {
    n -= c.length;
  }

  return text.replace(/[aiueo]/gi, () => c[(y = (x++ - n) % c.length)]);
}

// <-- Best Solution -->
function vowelShiftNest(text, n) {
  if (!n || !text || /![aeuio]/i.test(text)) return text;

  let v = text.match(/[aeuio]/gi);

  v = [...v.slice(-n % v.length), ...v.slice(0, -n % v.length)];

  return text.replace(/[aeuio]/gi, (_) => v.shift());
}
