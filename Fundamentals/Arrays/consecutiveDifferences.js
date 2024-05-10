// <-- Consecutive Differences -->

/*
  Given a list of integers, find the positive difference between each consecutive pair of numbers, and put this into a new list of differences. Then, find the differences between consecutive pairs in this new list, and repeat until the list has a length of 1. Then, return the single value.

  The list will only contain integers, and will not be empty.

  For example:

  differences([1, 2, 3]) => [1, 1] => [0] -> 0
  differences([1, 5, 2, 7, 8, 9, 0]) => [4, 3, 5, 1, 1, 9] => [1, 2, 4, 0, 8] => .. => 1
  differences([2, 3, 1]) => [1, 2] => [1] => 1  
*/

// <-- My Solution -->
function differences(list) {
	if (list.length === 1) return list[0];

	const newList = list.reduce((acc, value, key, array) => {
		if (key === array.length - 1) return acc;

		const newValue = Math.abs(value - array[key + 1]);
		acc.push(newValue);

		return acc;
	}, []);

	return differences(newList);
}

// <-- Best Solution -->
function differencesBest(list) {
	while (list.length > 1)
		list = list.slice(1).map((n, i) => Math.abs(list[i] - n));

	return list[0];
}
