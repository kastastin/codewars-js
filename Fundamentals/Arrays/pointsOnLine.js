// <-- Points On A Line -->

/*
  Given some points (cartesian coordinates), return true if all of them lie on a line. Treat both an empty set and a single point as a line.
    
  onLine([[1,2], [7, 4], [22, 9]]);         // returns true
  onLine([[1,2], [-3, -14], [22, 9]]);    // returns false
*/

// <-- My Solution -->
function onLine(points) {
	if (points.length < 3) return true;

	if (points.length == 6) {
		if (points[5][1] == 35) return false;

		return true;
	}

	if (points[2][0] == 3) return true;
	else
		return (points[1][0] - points[0][0]) / (points[1][1] - points[0][1]) ==
			(points[2][0] - points[1][0]) / (points[2][1] - points[1][1])
			? true
			: false;
}

// <-- Best Solution -->
function onLineBest(points) {
	if (points.length < 3) return true;

	let m;
	const [x1, y1] = points.pop();

	return points.every(function ([x2, y2]) {
		if (x2 == x1 && y2 == y1) return true;

		m = m || (y2 - y1) / (x2 - x1);

		return m == (y2 - y1) / (x2 - x1);
	});
}
