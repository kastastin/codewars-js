// <-- Get angle between hour and minute hands -->

/*
  Your task is to write a function that accepts string parameter time (Example: "22:17") and returns angle between minute and hour hands on round clock at that time.

  The angle measured is the smaller of two angles the two hands may form.

  If hours or minutes out of their range return or input is "Invalid input".

  For example:

  getAngle("15:15"); // 7.5
  getAngle("s5:15"); // "Invalid input"
  getAngle("error"); // "Invalid input"
*/

// <-- My Solution -->
function getAngle(t) {
  let [h, m] = t.split`:`.map(Number);

  if (h > 23 || m > 59 || [h, m].some((x) => Number.isNaN(x))) return "Invalid input";

  h = (30 * h + m / 2) % 360;
  m *= 6;

  const o = Math.abs(h - m);

  return Math.min(360 - o, o);
}

// <-- Best Solution -->
function getAngleBest(time) {
  if (!/^(?!2[4-9])[0-2]?\d\:[0-5]\d$/.test(time)) return "Invalid input";

  const [hh, mm] = time.split`:`.map(Number);
  const angle = (hh * 30 - 5.5 * mm + 360) % 360;

  return Math.min(angle, 360 - angle);
}
