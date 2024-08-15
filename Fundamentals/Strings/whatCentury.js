// <-- What century is it? -->

/*
  Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

  Examples
  "1999" --> "20th"
  "2011" --> "21st"
  "2154" --> "22nd"
  "2259" --> "23rd"
  "1124" --> "12th"
  "2000" --> "20th"
*/

// <-- My Solution -->
function whatCentury(year) {
  const ex = ["st", "nd", "rd"];
  const cen =
    year.slice(-2) == "00" ? year.slice(0, 2) : +year.slice(0, 2) + 1 + "";

  return cen + (cen[0] > 1 ? ex[cen[1] - 1] || "th" : "th");
}

// <-- Best Solution -->
function whatCenturyBest(year) {
  const century = Math.ceil(year / 100);

  return (
    century +
    (century < 20 ? "th" : ["th", "st", "nd", "rd"][century % 10] || "th")
  );
}
