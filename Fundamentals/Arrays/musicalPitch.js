// <-- Integer to Musical Pitch Classes -->

/*
  This kata is the inverse of the previous one: you must write a method to_pitch_class that, when given an integer representing a musical pitch class, returns an array of every name for that note.

  There are only twelve pitch classes (which are cyclical, e.g., the note above number 11 is number 0), and the numerical values of the natural notes are as follows:

  C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11

  A sharp ("♯") raises a note by one, and a flat ("♭") lowers it by one. For this kata, we'll also be using the double sharp and the double flat, which are exactly what they sound like: the double sharp raises a pitch by two, and the double flat lowers a pitch by two. Since Codewars doesn't allow the characters for sharp, flat, double sharp, and double flat, we'll use the strings "#", "b", "x", and "bb" instead.

  Some examples:
  toPitchClass(2) // - > should return ['D', 'Cx', 'Ebb']
  toPitchClass(10) // -> should return ['A#', 'Bb', 'Cbb']
*/

// <-- My Solution -->
function toPitchClass(n) {
  const result = [];
  const notes = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

  for (const note in notes) {
    if (notes[note] === n) result.push(`${note}`);
    if ((notes[note] + 1) % 12 === n) result.push(`${note}#`);
    if ((notes[note] + 2) % 12 === n) result.push(`${note}x`);
    if (notes[note] - 1 === n || notes[note] + 11 === n) result.push(`${note}b`);
    if (notes[note] - 2 === n || notes[note] + 10 === n) result.push(`${note}bb`);
  }

  return result;
}

// <-- Best Solution -->
const values = {
  0: ["C", "Dbb", "B#"],
  1: ["C#", "Db", "Bx"],
  2: ["D", "Ebb", "Cx"],
  3: ["D#", "Eb", "Fbb"],
  4: ["E", "Fb", "Dx"],
  5: ["F", "Gbb", "E#"],
  6: ["F#", "Gb", "Ex"],
  7: ["G", "Abb", "Fx"],
  8: ["G#", "Ab"],
  9: ["A", "Bbb", "Gx"],
  10: ["A#", "Bb", "Cbb"],
  11: ["B", "Cb", "Ax"],
};

function toPitchClassBest(n) {
  return values[n % 12];
}
