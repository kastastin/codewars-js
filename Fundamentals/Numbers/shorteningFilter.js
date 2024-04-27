// <-- Number Shortening Filter -->

/*
  Create a function which returns another function (or process, in Ruby) that shortens very long numbers. Given an initial array of values replace the Xth power of a given base. If the input of the returned function is not a numerical string, it should return the input itself as a string.

  Here's an example, which is worth a thousand words:

  filter1 = shortenNumber(['','k','m'],1000);
  filter1('234324') == '234k';
  filter1('98234324') == '98m';
  filter1([1,2,3]) == '1,2,3';
  filter2 = shortenNumber(['B','KB','MB','GB'],1024);
  filter2('32') == '32B';
  filter2('2100') == '2KB';
  filter2('pippi') == 'pippi';
*/

// <-- My Solution -->
function shortenNumber(suffixes, base) {
	return function (str) {
		let count = 0;

		while (str > base) {
			str = Math.floor(str / base);
			count++;

			if (count > suffixes.length - 2) break;
		}

		return str + suffixes[count];
	};
}

// <-- Best Solution -->
function shortenNumberBest(suffixes, base) {
	if (isNaN(n)) {
		return "" + n;
	}

	let i = 0;
	let m = suffixes.length - 1;

	while (base < n && i < m) (n = Math.floor(n / base)), ++i;

	return n + suffixes[i];
}
