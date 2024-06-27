// <-- Dashatize -->

/*
  Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

  Ex:

  274 -> '2-7-4'
  6815 -> '68-1-5'
*/

// <-- My Solution -->
function dashatize(num) {
	return String(num)
		.replace(/([13579])/g, "-$1-")
		.replace(/--+/g, "-")
		.replace(/(^-|-$)/g, "");
}

// <-- Best Solution -->
function dashatizeBest(num) {
	return isNaN(num)
		? "NaN"
		: num
				.toString()
				.match(/([13579]|[02468]+)/g)
				.join("-");
}
