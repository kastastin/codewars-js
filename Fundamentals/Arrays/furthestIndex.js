// <-- The furthest distance of index -->

/*
  Write a function that accepts a string, and returns true if it is in the form of a phone number.
  Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

  Only worry about the following format:
  (123) 456-7890 (don't forget the space after the close parentheses)

  Examples:

  "(123) 456-7890"  => true
  "(1111)555 2345"  => false
  "(098) 123 4567"  => false
*/

// <-- My Solution -->
function furthestDistance(arr, k) {
  let maxDist = -1;

  while (arr.length > 0) {
    for (let i = 1; i < arr.length; i++) {
      if (Math.abs(arr[0] - arr[i]) >= k) {
        maxDist = i - 0 > maxDist ? i - 0 : maxDist;
      }
    }

    arr.shift();
  }

  return maxDist;
}

// <-- Best Solution -->
function furthestDistanceBest(arr, k) {
  for (let diff = arr.length - 1; diff >= 1; diff--) {
    for (let i = 0; i < arr.length - diff; i++) {
      if (Math.abs(arr[i] - arr[i + diff]) >= k) return diff;
    }
  }

  return -1;
}
