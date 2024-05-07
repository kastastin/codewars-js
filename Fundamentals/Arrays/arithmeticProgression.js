// <-- Is there an Arithmetic Progression sequence? -->

/*
  Check if the elements of an array form an arithmetic progression or if the array contains a sequence of elements that form an arithmetic progression.

  If the entire array forms an arithmetic sequence, the function returns true. If it's not an arithmetic progression itself but it contains at least one, return the index of the element where the first arithmetic sequence starts. If it's not one itself and it doesn't contain any, return false.

  An arithmetic sequence will always consist of at least 3 numbers. If this condition is not satisfied, the function will return undefined.

  The function hasArithmProg takes a single parameter, arr, and can return a boolean, a number(the index) or undefined.

  An arithmetic progression is a sequence of numbers such that the difference between two consecutive terms is a constant quantity.

  e.g. 1, 2, 3, 4,... constant = 1 e.g. 9, 7, 5, 3,... constant = -2
*/

// <-- My Solution -->
function hasArithmProg(arr) {
	if (arr.length < 3) return undefined;

	if (arr.every((_, i) => !i || arr[i] - arr[i - 1] === arr[1] - arr[0]))
		return true;

	for (let i = 0; i < arr.length - 2; i++)
		if (arr[i] - arr[i + 1] === arr[i + 1] - arr[i + 2]) return i;

	return false;
}

// <-- Best Solution -->
function hasArithmProgBest(arr) {
	if (arr.length < 3) return undefined;

	for (let i = 0; i < arr.length - 2; i++) {
		if (arr[i] - arr[i + 1] == arr[i + 1] - arr[i + 2]) {
			return x == 0 ? true : i;
		}
	}

	return false;
}
