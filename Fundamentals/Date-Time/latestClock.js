// <-- The latest clock -->

/*
  Write a function which receives 4 digits and returns the latest time of day that can be built with those digits. The time should be in HH:MM format.

  Examples:
  digits: 1, 9, 8, 3 => result: "19:38"
  digits: 9, 1, 2, 5 => result: "21:59" (19:25 is also a valid time, but 21:59 is later)

  Notes:
  Result should be a valid 24-hour time, between 00:00 and 23:59.
  Only inputs which have valid answers are tested.
*/

// <-- My Solution -->
function latestClock(...digits) {
	digits.sort();

	const greaterThanFive = digits.reduce(
		(acc, digit) => acc + Number(digit > 5),
		0
	);

	const getNearestDigit = (target) => {
		return digits.splice(
			digits.findLastIndex((num) => num <= target),
			1
		)[0];
	};

	const hourFirst =
		greaterThanFive === 2 ? getNearestDigit(1) : getNearestDigit(2);
	const hourSecond = hourFirst === 2 ? getNearestDigit(3) : getNearestDigit(9);
	const minutesFirst = getNearestDigit(5);
	const minutesSecond = digits[0];

	return `${hourFirst}${hourSecond}:${minutesFirst}${minutesSecond}`;
}

// <-- Best Solution -->
function latestClockBest(a, b, c, d) {
	const arr2str = (arr) =>
		arr
			.slice()
			.sort((a, b) => a - b)
			.join("_");

	const arr = [2, 3, 5, 9];
	const cmp = arr2str([a, b, c, d]);

	while (true) {
		const tmp = arr2str(arr);

		if (tmp === cmp) return `${arr[0]}${arr[1]}:${arr[2]}${arr[3]}`;

		for (let i = arr.length - 1; i >= 0; --i) {
			arr[i]--;

			if (arr[i] < 0) {
				arr[i] = i == 2 ? 5 : 9;
			} else {
				break;
			}
		}
	}
}
