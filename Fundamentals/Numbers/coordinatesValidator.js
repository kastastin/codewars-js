// <-- Coordinates Validator -->

/*
 You need to create a function that will validate if given parameters are valid geographical coordinates.

  Valid coordinates look like the following: "23.32353342, -32.543534534". The return value should be either true or false.

  Latitude (which is first float) can be between 0 and 90, positive or negative. Longitude (which is second float) can be between 0 and 180, positive or negative.

  Coordinates can only contain digits, or one of the following symbols (including space after comma) __ -, . __

  There should be no space between the minus "-" sign and the digit after it.

  Here are some valid coordinates:

  -23, 25
  24.53525235, 23.45235
  04, -23.234235
  43.91343345, 143
  4, -3
  And some invalid ones:

  23.234, - 23.4234
  2342.43536, 34.324236
  N23.43345, E32.6457
  99.234, 12.324
  6.325624, 43.34345.345
  0, 1,2
  0.342q0832, 1.2324
*/

// <-- My Solution -->
function isValidCoordinates(coordinates) {
  const match = coordinates.match(/^[-]?(\d+(?:\.\d+)?), [-]?(\d+(?:\.\d+)?)$/);

  if (!match) return false;

  const lat = Math.abs(parseFloat(match[1]));
  const lng = Math.abs(parseFloat(match[2]));

  return lat >= 0 && lat <= 90 && lng >= 0 && lng <= 180;
}

// <-- Best Solution -->
function isValidCoordinatesBest(coordinates) {
  return /^\-?([0-8]\d|90|\d)(\.\d*)?, ?\-?(1[0-7]\d|\d\d?|180)(\.\d*)?$/.test(
    coordinates,
  );
}
