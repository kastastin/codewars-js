// <-- Find the missing letter -->

/*
  Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

  You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
  The array will always contain letters in only one case.

  Example:

  ['a','b','c','d','f'] -> 'e'
  ['O','Q','R','S'] -> 'P'
  (Use the English alphabet with 26 letters!)
*/

// <-- My Solution -->
function findMissingLetter(array) {
	let first = array[0].charCodeAt(0);

	for (let i = 1; i < array.length; i++) {
		if (first + i !== array[i].charCodeAt(0))
			return String.fromCharCode(first + i);
	}

	throw new Error("Invalid input");
}

// <-- Best Solution -->
function findMissingLetterBest(array) {
	let i = array[0].charCodeAt();
	array.map((x) => (x.charCodeAt() == i ? i++ : i));

	return String.fromCharCode(i);
}
