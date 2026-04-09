// <-- Human Readable Time -->

/*
  Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

  HH = hours, padded to 2 digits, range: 00 - 99
  MM = minutes, padded to 2 digits, range: 00 - 59
  SS = seconds, padded to 2 digits, range: 00 - 59
  The maximum time never exceeds 359999 (99:59:59)
*/

// <-- Solution -->
function humanReadable(seconds) {
  const hours = parseInt(seconds / 3600);
  const minutes = parseInt(seconds / 60) % 60;
  const seconds = seconds % 60;

  const pad = (val) => (val < 10 ? "0" + val : val);

  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}
