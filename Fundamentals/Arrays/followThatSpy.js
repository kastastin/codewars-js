// <-- Follow that Spy -->

/*
  You've been provided with an array of itinerary routes, decipher the precise destinations he will visit in the correct sequence according to his meticulously planned itineraries.

  Example
  Based on the provided routes:
  [ [USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN] ]

  The correct sequence of destinations is:
  "USA, BRA, UAE, JPN, PHL"

  Note:
  You can safely assume that there will be no duplicate locations with distinct routes.
  All routes provided will have non-empty itineraries.
  There will always be at least one (1) route connecting one waypoint to another.
*/

// <-- My Solution -->
function findRoutes(routes) {
  let waypoint = routes.find((x) => !routes.some((y) => x[0] === y[1]));
  let from = waypoint[0];
  let result = [from];

  for (let i = 0; i < routes.length; i++) {
    waypoint = routes.find((x) => x[0] === from);
    from = waypoint[1];
    result.push(from);
  }

  return result.join(", ");
}

// <-- Best Solution -->
function findRoutesBest(routes) {
  const arr = routes.reduce((a, c) => a.concat(c), []);
  const startValue = routes.find((e) => arr.indexOf(e[0]) == arr.lastIndexOf(e[0]));

  return routes
    .slice(1)
    .reduce((a, c, i) => a.concat(routes.find((e) => e[0] == a[a.length - 1])[1]), startValue)
    .join(", ");
}
