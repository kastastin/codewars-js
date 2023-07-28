// <-- Form The Minimum -->

/*
  Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

  Notes:
  Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
  Input >> Output Examples
  minValue ({1, 3, 1})  ==> return (13)
  Explanation:
  (13) is the minimum number could be formed from {1, 3, 1} , Without duplications
  minValue({5, 7, 5, 9, 7})  ==> return (579)
*/

// <-- My Solution -->
function minValue(values) {
  const positives = values.filter((val) => val > 0);
  const uniques = [...new Set(positives)];
  const ordered = uniques.sort((a, b) => a - b);

  return parseInt(ordered.join(""));
}

// <-- Best Solution -->
function minValue(values) {
  return Number(Array.from(new Set(values)).sort().join(""));
}
