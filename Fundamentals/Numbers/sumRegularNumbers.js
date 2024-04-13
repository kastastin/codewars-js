// <-- Sum Of Regular Numbers -->

/*
  You are given a regular array arr. Let's call a step the difference between two adjacent elements.

  Your task is to sum the elements which belong to the sequence of consecutive elements of length at least 3 (but as long as possible), such that the steps between the elements in this sequence are the same.

  Note that some elements belong to two sequences and have to be counted twice.

  Example
  For arr = [54, 70, 86, 1, -2, -5, 0, 5, 78, 145, 212, 15], the output should be 639.
*/

// <-- My Solution -->
function sumOfRegularNumbers(arr) {
	let isStep;
	let sum = 0;
	let isFirst = true;

	for (let i = 0; i < arr.length - 2; i++) {
		isStep = arr[i + 1] - arr[i] === arr[i + 2] - arr[i + 1];

		if (isStep) sum += (isFirst ? arr[i] + arr[i + 1] : 0) + arr[i + 2];

		isFirst = !isStep;
	}

	return sum;
}

// <-- Best Solution -->
function sumOfRegularNumbersBest(arr) {
	return arr
		.reduce(
			(acc, val) => {
				const [prev2, prev1] = acc.at(-1).slice(-2);

				if (prev1 + 0.5 && prev1 - prev2 !== val - prev1) {
					acc.push([prev1]);
				}

				acc.at(-1).push(val);

				return acc;
			},
			[[]]
		)
		.filter((group) => group.length > 2)
		.flat()
		.reduce((acc, val) => acc + val, 0);
}
