// <-- Sequence convergence -->

/*
  Consider the following series:

  1, 2, 4, 8, 16, 22, 26, 38, 62, 74, 102, 104, 108, 116, 122

  It is generated as follows:

  For single digit integers, add the number to itself to get the next element.
  For other integers, multiply all the non-zero digits and add the result to the original number to get the next element.
  For example: 16 + (6 * 1) = 22 and 104 + (4 * 1) = 108.

  Let's begin the same series with a seed value of 3 instead of 1:

  3, 6, 12, 14, 18, 26, 38, 62, 74, 102, 104, 108, 116, 122

  Notice that the two sequences converge at 26 and are identical therefter. We will call the series seeded by a value of 1 the "base series" and the other series the "test series".

  Let's look another test series that starts with 15

  15, 20, 22, 26, 38, 62, 74, 102, 104, 108, 116, 122

  The sequences converge at 22 if the test series starts with 15

  You will be given a seed value for the test series and your task will be to return the number of integers that have to be generated in the test series before it converges to the base series. In the case above:

  convergence(3) = 5, the length of [3, 6, 12, 14, 18]. 
  convergence(15) = 2, the length of [15, 20].
*/

// <-- My Solution -->
function convergence(number) {
	const baseSeries = [1, 2];

	const getNext = (n) => {
		if (n < 10) return n + n;

		return n + [...(n + "")].reduce((a, b) => a * (+b || 1));
	};

	for (let idx = 0; idx < Number.MAX_SAFE_INTEGER; idx++) {
		while (baseSeries[1] < number) {
			baseSeries = [baseSeries[1], getNext(baseSeries[1])];
		}

		if (baseSeries.includes(number)) return idx;

		number = getNext(number);
	}
}

// <-- Best Solution -->
function convergenceBest(number) {
	function go(number, a = 1) {
		for (let c of number.toString()) {
			if (c != "0") a *= +c;
		}

		return number + a;
	}

	let b = 1;
	let t = number;
	let k = 0;

	while (t !== b) {
		t > b ? (b = go(b)) : ((t = go(t)), k++);
	}

	return k;
}
