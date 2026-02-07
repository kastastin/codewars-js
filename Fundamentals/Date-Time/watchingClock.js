// <-- Watching the Clock -->

/*
  Two clocks, which show the time in hours and minutes using the 24 hour clock, are running at different speeds. Each clock is an exact number of minutes per hour fast. Both clocks start showing the same time (00:00) and are checked regularly every hour (starting after one hour) according to an accurate timekeeper. What time will the two clocks show on the first occasion when they are checked and show the same time?

  NB: For this question we only care about the clocks matching when they are checked.

  For example, suppose the first clock runs 1 minute fast (per hour) and the second clock runs 31 minutes fast (per hour).

  • When the clocks are first checked after one hour, the first clock will show 01:01 and the second clock will show 01:31;

  • When the clocks are checked after two hours, they will show 02:02 and 03:02;

  • After 48 hours the clocks will both show 00:48

  Write a function which takes in a two integers as parameters, indicating the number of minutes fast (per hour) of the first and second clock respectively.

  You should output the time shown on the clocks when they first match. Both the hour and the minutes should be displayed with two digits (24 hour format).
*/

// <-- My Solution -->
function timeAtSync(first, second) {
  let hours1 = (1 + Math.floor(first / 60)) % 24;
  let hours2 = (1 + Math.floor(second / 60)) % 24;

  let minutes1 = first % 60;
  let minutes2 = second % 60;

  while (hours1 !== hours2 || minutes1 !== minutes2) {
    hours1 = (hours1 + 1 + Math.floor((first + minutes1) / 60)) % 24;
    hours2 = (hours2 + 1 + Math.floor((second + minutes2) / 60)) % 24;
    minutes1 = (first + minutes1) % 60;
    minutes2 = (second + minutes2) % 60;
  }

  return `${String(hours1).padStart(2, "0")}:${String(minutes1).padStart(2, "0")}`;
}

// <-- Best Solution -->
function timeAtSync(first, second) {
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const hours = 1440 / gcd(1440, Math.abs(first - second));
  const clock = (((first + 60) % 1440) * hours) % 1440;

  return [(clock / 60) | 0, clock % 60].map((x) => (x < 10 ? "0" + x : x)).join(":");
}
