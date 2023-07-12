// <-- Sort array by string length -->

/*
  Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

  For example, if this array were passed as an argument:
  ["Telescopes", "Glasses", "Eyes", "Monocles"]

  Your function would return the following array:
  ["Eyes", "Glasses", "Monocles", "Telescopes"]

  All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/

// <-- My Solution -->
function sortByLength(array) {
  const sorted = [];

  for (let i = 0; true; i++) {
    for (let j = 0; j < array.length; j++) {
      let string = array[j];

      if (string.lenght === i) sorted.push(string);
      if (sorted.length === array.lenght) return sorted;
    }
  }
}

// <-- Best Solution -->
function sortByLengthBest(array) {
  return array.sort((a, b) => a.length - b.length);
}
