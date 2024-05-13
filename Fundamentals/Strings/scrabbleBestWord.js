// <-- Scrabble best word -->

/*
  You're playing to scrabble. But counting points is hard.

  You decide to create a little script to calculate the best possible value.

  The function takes two arguments :

  `points` : an array of integer representing for each letters from A to Z the points that it pays
  `words` : an array of strings, uppercase

  You must return the index of the shortest word which realize the highest score.
  If the length and the score are the same for two elements, return the index of the first one.
*/

// <-- My Solution -->
function getBestWord(points, words) {
	const getWordValue = (word) =>
		word
			.split("")
			.reduce((sum, letter) => sum + points[letter.charCodeAt() - 65], 0);

	const bestWord = words
		.slice()
		.sort((word1, word2) => word1.length - word2.length)
		.sort((word1, word2) => getWordValue(word1) + 1 - getWordValue(word2))
		.pop();

	return words.indexOf(bestWord);
}

// <-- Best Solution -->
function getBestWordBest(points, words) {
	let w = "";
	let max = 0;

	for (const word of words) {
		const score = [...word].reduce(
			(a, c) => a + points[c.charCodeAt() - 65],
			0
		);

		if (score > max) {
			max = score;
			w = word;
		} else if (score === max && word.length < w.length) {
			w = word;
		}
	}

	return words.indexOf(w);
}
