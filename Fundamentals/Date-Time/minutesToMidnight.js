// <-- Minutes to Midnight -->

/*
  The function minutesToMidnight(d) will take a date object as parameter. Return the number of minutes in the following format:

  "x minute(s)"

  You will always get a date object with of today with a random timestamp.
  You have to round the number of minutes.
  Milliseconds doesn't matter!

  Some examples:
  10.00 am => "840 minutes"
  23.59 pm => "1 minute"
*/

// <-- My Solution -->
function minutesToMidnight(d) {
	const h = 23 - d.getHours();
	const m = 59 - d.getMinutes();
	const s = d.getSeconds();

	if (s <= 30) m++;

	return h * 60 + m == 1 ? h * 60 + m + " minute" : h * 60 + m + " minutes";
}

// <-- Best Solution -->
function minutesToMidnightBest(d) {
	const mins = Math.round(
		(new Date().setHours(24, 0, 0, 0) - d.getTime()) / 60000
	);

	return `${mins} minute${mins > 1 ? "s" : ""}`;
}
