// <-- is Paperfold Sequence -->

/*
  The regular paperfolding sequencewiki, also known as the dragon curve sequence, is an infinite automatic sequence of 0s and 1s defined as a fixed point of the morphism

  1 1 → 1 1 0 1
  0 1 → 1 0 0 1
  1 0 → 1 1 0 0
  0 0 → 1 0 0 0

  as follows:
  1 1  →  1 1 0 1  →  1 1 0 1 1 0 0 1  →  1 1 0 1 1 0 0 1 1 1 0 0 1 0 0 1  →  ..

  Task
  Given an array of 0s and 1s, return if it is a leading substring ( prefix ) of this sequence.

  Performance
  There will be 100 performance random tests, up to 100 000 000 elements.

  Required time complexity is intended to be O(n). There is little tolerance for O(n log n) solutions, or even O(n) solutions with largish constant factors or overhead. This kata may require micro-optimisations.
*/

// <-- Solution -->
function isPaperfold(xs) {
  for (let index = 0, length = xs.length; index < length; index++) {
    const position = index + 1;
    const expected = position & ((position & -position) << 1) ? 0 : 1;

    if (xs[index] !== expected) {
      return false;
    }
  }

  return true;
}
