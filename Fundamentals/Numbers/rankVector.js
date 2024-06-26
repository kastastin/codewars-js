// <-- Rank Vector -->

/*
  Given an array (or list) of scores, return the array of ranks for each value in the array. The largest value has rank 1, the second largest value has rank 2, and so on. Ties should be handled by assigning the same rank to all tied values. For example:

  array = [9,3,6,10] --> ranks = [2,4,3,1]

  array = [3,3,3,3,3,5,1] --> ranks = [2,2,2,2,2,1,7]

  because there is one 1st place value, a five-way tie for 2nd place, and one in 7th place.
*/

// <-- My Solution -->
function ranks(a) {
	const sortedArr = a.slice().sort((a, b) => b - a);

	return a.map((v) => sortedArr.indexOf(v) + 1);
}

// <-- Best Solution -->
const ranksBest = (a, b = [...a].sort((a, b) => b - a)) =>
	a.map((x) => 1 + b.indexOf(x));
