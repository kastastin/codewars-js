// <-- Weighing on scales with pans -->

/*
  Laura and Sarah Kraft are treasure hunter twins. After another successful journey, they obtained several pieces of gold ore and one large figurine covered with mystical writings.

  They had with them electronic and mechanical scales. They weighed and found out the exact weight of each piece of gold ore, but the figurine was too large and could not be weighed on an electronic scale.

  The mystical inscription on the figurine said that its weight is equal to the holy number N. Then the twins decided to check whether this statement was true using mechanical scales.

  Help the twins set the pieces of ore on the scales in such a way that the scales come into balance after you place the figurine on the right pane (assuming that the figurine really weighs N).

  Inputs:
  weights - an array of weights for pieces of gold ore
  N - the holy number, the weight of the figurine placed on the right pan
  The output should be an array describing the pans: [left, right], the left and right are the weight arrays of the pieces of gold ore placed on the respective pan. Obviously, each piece can only be used once. Although not all pieces must be used.

  For example, suppose that pieces of gold ore weigh [1, 2, 7]
  for N = 3 the output should be [[1, 2],[]]
  for N = 5 the output should be [[7],[2]]

  If the scale cannot be balanced, an empty array should be returned.
*/

// <-- Solution -->
function weightN(weights, n) {
  if (weights.includes(n)) {
    return [[n], []];
  }

  for (let i = 0; i < weights.length; i++) {
    const filtered = [...weights.slice(i + 1)];

    const left = weightN(filtered, n - weights[i]);
    if (left.length > 0) {
      return [[weights[i], ...left[0]], left[1]];
    }

    const right = weightN(filtered, n + weights[i]);
    if (right.length > 0) {
      return [right[0], [weights[i], ...right[1]]];
    }
  }

  return [];
}
