// <-- Find missing numbers -->

/*
  You will get an array of numbers.

  Every preceding number is smaller than the one following it.

  Some numbers will be missing, for instance:

  [-3,-2,1,5] //missing numbers are: -1,0,2,3,4
  Your task is to return an array of those missing numbers:

  [-1,0,2,3,4]
*/

// <-- My Solution -->
function findMissingNumbers(arr) {
	const output = [];

	for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
		if (arr.indexOf(i) === -1) output.push(i);
	}

	return output;
}

// <-- Best Solution -->
function findMissingNumbersBest(arr) {
	return Array.from(
		{ length: Math.max(...arr) - Math.min(...arr) },
		(_, i) => Math.min(...arr) + i
	).filter((x) => !arr.includes(x));
}
