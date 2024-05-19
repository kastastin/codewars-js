// <-- Packing Rectangles -->

/*
  Problem statement
  Packing multiple rectangles of varying widths and heights in an enclosing rectangle of minimum area. Given 3 rectangular boxes, find minimal area that they can be placed. Boxes can not overlap, these can only be placed on the floor.

  Input
  3 pairs of numbers come to the input - the lengths(a1, b1, a2, b2, a3, b3) of the sides of the boxes. (1 ⩽ ai, bi ⩽ 10^4)

  Output
  Return a number equal to the minimum occupied area.

  Example
  Input example:

  packing_rectangles(4,10,5,11,12,3)
  Output example:

  144
*/

// <-- Best Solution -->
function packingRectangles(a1, b1, a2, b2, a3, b3) {
	function* gen() {
		for (let [a, b] of [
			[a1, b1],
			[b1, a1],
		])
			for (let [c, d] of [
				[a2, b2],
				[b2, a2],
			])
				for (let [e, f] of [
					[a3, b3],
					[b3, a3],
				]) {
					yield (a + c + e) * Math.max(b, d, f);
					yield (a + Math.max(c, e)) * Math.max(b, d + f);
					yield (Math.max(a, c) + e) * Math.max(b + d, f);
					yield (Math.max(a, e) + c) * Math.max(b + f, d);
				}
	}
	return Math.min(...gen());
}
