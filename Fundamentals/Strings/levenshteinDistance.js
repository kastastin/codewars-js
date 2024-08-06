// <-- Levenshtein Distance -->

/*
  In information theory and computer science, the Levenshtein distance is a string metric for measuring the difference between two sequences. Informally, the Levenshtein distance between two words is the minimum number of single-character edits (i.e. insertions, deletions or substitutions) required to change one word into the other.

  (http://en.wikipedia.org/wiki/Levenshtein_distance)

  Your task is to implement a function which calculates the Levenshtein distance for two arbitrary strings.
*/

// <-- My Solution -->
function levenshtein(a, b) {
  const matrix = new Array(a.length + 1)
    .fill(0)
    .map(() => new Array(b.length + 1).fill(0));

  matrix[0] = matrix[0].map((_, j) => j);

  for (let i = 1; i <= a.length; i++) {
    matrix[i][0] = i;

    for (let j = 1; j <= b.length; j++) {
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + (a[i - 1] != b[j - 1] ? 1 : 0)
      );
    }
  }

  return matrix[a.length][b.length];
}

// <-- Best Solution -->
function levenshteinBest(s, t) {
  for (var v = [0], w, l = t.length, i = l, j; i; ) v[i] = i--;

  for (; i < s.length; ) {
    for (w = [++i], j = 0; j < l; )
      w[j + 1] = Math.min(w[j] + 1, v[j + 1] + 1, v[j] + (s[i - 1] != t[j++]));

    for (++j; j--; ) v[j] = w[j];
  }

  return w[l];
}
