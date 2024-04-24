// <-- Simple sum of pairs -->

/*
  Given an integer n, find two integers a and b such that:

  A) a >= 0 and b >= 0
  B) a + b = n
  C) DigitSum(a) + Digitsum(b) is maximum of all possibilities.  
  You will return the digitSum(a) + digitsum(b).

  For example:
  solve(29) = 11. If we take 15 + 14 = 29 and digitSum = 1 + 5 + 1 + 4 = 11. There is no larger outcome.
  n will not exceed 10e10
*/

// <-- My Solution -->
function pairsSum(n) {
	const a = `${n}`.slice(1).replace(/\d/g, "9");
	const b = n - a;

	const str = `${a}${b}`;
	const result = [...str].reduce((acc, n) => +n + acc, 0);

	return result;
}

// <-- Best Solution -->
function pairsSumBest(n) {
	n = n.toString();

	const a = String(n[0] - 1) + "9".repeat(n.length - 1);

	return [...(a + (n - a))].reduce((a, b) => Number(a) + Number(b)) || 0;
}
