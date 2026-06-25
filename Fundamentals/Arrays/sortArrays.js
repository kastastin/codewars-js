// <-- Sort arrays -->

/*
  This time the input is a sequence of course-ids that are formatted in the following way:
  name-yymm

  The return of the function shall first be sorted by yymm, then by the name (which varies in length).
*/

// <-- Solution -->
function sortme(courses) {
  const sortKey = (s) => s.slice(-4) + s.slice(0, -5);

  return courses.sort((a, b) => sortKey(a).localeCompare(sortKey(b)));
}
