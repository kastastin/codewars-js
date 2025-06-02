// <-- Digit Racers -->

/*
 Many of the digits, zero through nine showed up for a race one day.

  The digit with the most occurences in the input string got 1st place.

  The digit that had the second most occurences got 2nd place, and so on it went, possibly all the way to 10th place.

  When there were ties, the digit with the largest index in the input string was listed first, 2nd largest index listed next, and so on.

  Digits that didnt make it to the race were listed at the bottom in ascending order like this as example "Absent digits: 3, 7".

  If none of the digits were absent from the race, the bottom of the winners list would display "All digits present".

  The end of each line has a break except for the last.

  example:

  Input:
  "00009393936611528"

  Output:
  "1st place: 0
  2nd place: 3, 9
  3rd place: 1, 6
  4th place: 8, 2, 5
  Absent digits: 4, 7"
  Notice in the above example, the tied digits are listed in order of larger indexes first.
  For more examples check out the Example Test Cases.

  Input and Output:

  input : a string of one or more digits.

  output : a string formatted as in the above example.
*/

// <-- My Solution -->
function digitRacers(s) {
  const d = {};

  for (let k of new Set(s)) {
    let v = [...s].filter((e) => e === k).length;
    d[v] = [...(d[v] || []), k];
  }

  let a = Object.entries(d).sort((a, b) => b[0] - a[0]);
  let t = [..."0123456789"].filter((e) => !s.includes(e)).join``;

  return a
    .map(
      ([k, t], i) =>
        `${i + 1}${
          i === 0 ? "st" : i === 1 ? "nd" : i === 2 ? "rd" : "th"
        } place: ${t.sort((a, b) => s.lastIndexOf(b) - s.lastIndexOf(a))
          .join`, `}`,
    )
    .concat(t ? `Absent digits: ${t.split``.join`, `}` : "All digits present")
    .join`\n`;
}

// <-- Best Solution -->
function digitRacersBest(str) {
  let ints = "0123456789";
  const endings = ["st", "nd", "rd", "th"];
  
  return (
    Object.entries(
      Object.entries([...str].reduce((o, l) => ({ ...o, [l]: ~~o[l] + 1 }), {}))
        .sort((a, b) => b[1] - a[1])
        .reduce((r, n) => {
          ints = ints.replace(n[0], "");
          if (!r[n[1]]) {
            r[n[1]] = [];
          }
          r[n[1]].push(n[0]);
          return r;
        }, {}),
    )
      .sort((a, b) => b[0] - a[0])
      .map(
        (k, i) =>
          `${i + 1}${endings[i] || endings[endings.length - 1]} place: ${k[1]
            .sort((a, b) => str.lastIndexOf(b) - str.lastIndexOf(a))
            .join(", ")}`,
      )
      .join("\n") +
    "\n" +
    (!ints.length
      ? `All digits present`
      : `Absent digits: ${[...ints].join(", ")}`)
  );
}
