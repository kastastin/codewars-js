// <-- Pair of gloves -->

/*
  The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

  Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

  Examples:
  input = ["red", "green", "red", "blue", "blue"]
  result = 2 (1 red pair + 1 blue pair)

  input = ["red", "red", "red", "red", "red", "red"]
  result = 3 (3 red pairs)
*/

// <-- My Solution -->
function numberOfPairs(gloves) {
	let amount = 0;
	const uniques = new Set(gloves);

	for (let unique of uniques) {
		const count = Math.floor(
			gloves.filter((pair) => pair === unique).length / 2
		);

		amount += count;
	}

	return amount;
}

// <-- Best Solution -->
function numberOfPairsBest(gloves) {
	const arr = Array.from(new Set(gloves));

	return arr.reduce(
		(a, b) =>
			a + Math.floor(gloves.join("").match(new RegExp(b, "g")).length / 2),
		0
	);
}
