// <-- Professional Categorization -->

/*
  Input/Output
  [input] string array pros

  A sorted non-empty array of unique strings consisting of English letters.

  Here and below we assume that strings are sorted lexicographically.

  1 ≤ pros.length ≤ 10,

  3 ≤ pros[i].length ≤ 10.

  [input] 2D string array preferences

  Array of the same length as pros. For each valid i preferences[i] is a sorted array of unique elements, representing the categories the ith Pro provides services in.

  1 ≤ preferences.length ≤ 10,

  1 ≤ preferences[i].length ≤ 10,

  3 ≤ preferences[i][j].length ≤ 25.

  [output] 2D string array

  Array of category descriptions sorted by category names. Each category should be listed in the following format: [[], [, ...]] where is a category name, and is a Pro that provides services in it.

  Each category present in preferences should be returned (in the right order), and Pros in each subarray should be sorted.

  Example
  For pros = ["Jack", "Leon", "Maria"] and

  preferences = [
  ["Computer repair", "Handyman", "House cleaning"],
  ["Computer lessons", "Computer repair", "Data recovery service"],
  ["Computer lessons", "House cleaning"]
  ]```
  the output should be
  [ [["Computer lessons"], ["Leon", "Maria"]], [["Computer repair"], ["Jack", "Leon"]], [["Data recovery service"], ["Leon"]], [["Handyman"], ["Jack"]], [["House cleaning"], ["Jack", "Maria"]] ]```
*/

// <-- My Solution -->
function proCategorization(pros, preferences) {
  const cats = [...new Set(preferences.reduce((s, v) => s.concat(v), []))].sort(
    (a, b) => a.localeCompare(b),
  );

  return cats.map((cat) => {
    const names = [];

    preferences.forEach((items, i) => {
      if (items.includes(cat)) {
        names.push(pros[i]);
      }
    });

    return [[cat], names.sort((a, b) => a.localeCompare(b))];
  });
}

// <-- Best Solution -->
function proCategorizationBest(pros, preferences) {
  const categories = {};

  pros.forEach((name, i) =>
    preferences[i].forEach((p) =>
      (categories[p] || (categories[p] = [])).push(name),
    ),
  );

  return Object.keys(categories)
    .sort()
    .map((c) => [[c], categories[c].sort()]);
}
