// <-- Simple time difference -->

/*
  In this Kata, you will be given a series of times at which an alarm sounds. Your task will be to determine the maximum time interval between alarms. Each alarm starts ringing at the beginning of the corresponding minute and rings for exactly one minute. The times in the array are not in chronological order. Ignore duplicate times, if any.

  For example:
  solve(["14:51"]) = "23:59". If the alarm sounds now, it will not sound for another 23 hours and 59 minutes.
  solve(["23:00","04:22","18:05","06:24"]) == "11:40". The max interval that the alarm will not sound is 11 hours and 40 minutes.

  In the second example, the alarm sounds 4 times in a day.
*/

// <-- My Solution -->
function solve(arr) {
  const max = Math.max(
    ...arr
      .map((val) => val.split(":").reduce((acc, val, idx) => acc + val * (idx ? 1 : 60), 0))
      .sort((a, b) => a - b)
      .map((val, idx, arr) => (!idx ? 24 * 60 - arr[arr.length - 1] - 1 + val : val - arr[idx - 1] - 1)),
  );

  return `${("0" + Math.floor(max / 60)).slice(-2)}:${("0" + (max % 60)).slice(-2)}`;
}

// <-- Best Solution -->
function solveBest(arr) {
  if (arr.length === 1) {
    return "23:59";
  }

  const l = arr.map((e) => e.split(":").reduce((h, m) => +m + h * 60)).sort((a, b) => a - b);
  const m = Math.max(...l.map((n, i) => ((l[i + 1] || l[0]) - n + 24 * 60) % (24 * 60))) - 1;

  return [(m / 60) | 0, m % 60].map((n) => ("" + n).padStart(2, "0")).join(":");
}
