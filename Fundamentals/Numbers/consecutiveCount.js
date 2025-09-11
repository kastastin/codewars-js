// <-- Consecutive Count -->

/*
  I want to know the size of the longest consecutive elements of X in Y. You will receive two arguments: items and key. Return the length of the longest segment of consecutive keys in the given items.

  Notes:

  The items and the key will be either an integer or a string (consisting of letters only)
  If the key does not appear in the items, return 0
  Examples
  90000, 0           -->  4
  "abcdaaadse", "a"  -->  3
  "abcdaaadse", "z"  -->  0
*/

// <-- My Solution -->
function getConsectiveItems(items, key) {
  items = items.toString();
  key = key.toString();

  let max = 0;
  let current = 0;

  for (const c of items) {
    current = c == key ? current + 1 : 0;

    if (current > max) {
      max = current;
    }
  }

  return max;
}

// <-- Best Solution -->
function getConsectiveItemsBest(items, key) {
  const keys = String(items).match(new RegExp(`${key}+`, "gu")) || [];

  return Math.max(...keys.map((item) => item.length), 0);
}
