// <-- Time Math -->

/*
  Given two times in hours, minutes, and seconds (ie '15:04:24'), add or subtract them. This is a 24 hour clock. Output should be two digits for all numbers: hours, minutes, seconds (ie '04:02:09').

  timeMath('01:24:31', '+', '02:16:05') === '03:40:36'

  timeMath('01:24:31', '-', '02:31:41') === '22:52:50'
*/

// <-- My Solution -->
function timeMath(time1, op, time2) {
	let seconds = (time) => time.split(":").reduce((a, b) => a * 60 + +b, 0);

	let res =
		op === "+"
			? seconds(time1) + seconds(time2)
			: seconds(time1) - seconds(time2);

	let date = new Date(res * 1000);

	return date.toTimeString().slice(0, 8);
}

// <-- Best Solution -->
function timeMathBest(time1, op, time2) {
	const t0 = new Date("1970-01-01 00:00:00");

	const t1 = new Date(
		new Date("1970-02-01 " + time1) -
			t0 +
			(new Date("1970-01-01 " + time2) - t0) * (op == "+" ? 1 : -1)
	);

	return (t1 + "").slice(16, 24);
}
