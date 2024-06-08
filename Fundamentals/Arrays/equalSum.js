// <-- Two Sets of Equal Sum -->

/*
  If possible, divide the integers 1,2,…,n into two sets of equal sum.

  Input:
  A positive integer n <= 1,000,000.

  Output:
  If it's not possible, return [ ] (Python, Javascript, Swift, Ruby) or ( ) (Python) or [ [],[] ] (Java, C#, C++, Kotlin) or None (Scala).
  If it's possible, return two disjoint sets. Each integer from 1 to n must be in one of them. The integers in the first set must sum up to the same value as the integers in the second set. The sets can be returned in a tuple, list, or array, depending on language.

  Examples:
  For n = 8, valid answers include:
  [1, 3, 6, 8], [2, 4, 5, 7] (or [[1, 3, 6, 8], [2, 4, 5, 7]])
  [8, 1, 3, 2, 4], [5, 7, 6]
  [7, 8, 3], [6, 1, 5, 4, 2], and others.

  For n = 9 it is not possible. For example, try [6, 8, 9] and [1, 2, 3, 4, 5, 7], but the first sums to 23 and the second to 22. No other sets work either.
*/

// <-- My Solution -->
function createTwoSetsOfEqualSum(n) {
	let equalSum = (n * (n + 1)) / 2;

	if (equalSum % 2 != 0) return [];

	let acc = equalSum / 2;

	let answer = [[], []];

	for (let i = n; i >= 1; i--) {
		if (acc - i >= 0) {
			acc -= i;
			answer[0].push(i);
		} else {
			answer[1].push(i);
		}
	}

	return answer;
}

// <-- Best Solution -->
function createTwoSetsOfEqualSumBest(n) {
	if ([1, 2].includes(n % 4)) return [];

	let res = [[], []],
		m = [0, 0];

	for (let a = n; a; a--) {
		let i = m[0] > m[1] ? 1 : 0;

		res[i].push(a);
		m[i] += a;
	}

	return res;
}
