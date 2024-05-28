// <-- Sort the odd -->

/*
  You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

  Examples
  [7, 1]  =>  [1, 7]
  [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

// <-- My Solution -->
function sortArray(array) {
	const odds = [];
	const evens = [];
	const oddIndices = [];

	array.forEach((i, index) => {
		if (i % 2 !== 0) {
			odds.push(i);
			oddIndices.push(index);
		} else {
			evens.push(i);
		}
	});

	odds.sort((a, b) => a - b);

	oddIndices.forEach((index, i) => {
		array[index] = odds[i];
	});

	return array;
}

// <-- Best Solution -->
function sortArrayBest(arr) {
	const odd = arr.filter((x) => x % 2).sort((a, b) => a - b);

	return arr.map((x) => (x % 2 ? odd.shift() : x));
}
