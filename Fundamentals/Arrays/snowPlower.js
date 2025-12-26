// <-- Snow Plower -->

/*
  Task
  Input
  A non-square grid of characters driveway (rows separated by \n, no trailing newline).
  Two non-negative integers:
  L: plow side extensions to the left
  R: plow side extensions to the right
  Output
  A single string representing the plowed driveway, following the plowing rules described above.

  Constraints
  At least one grid dimension divisible by W = 1 + L + R.
  Grid size: 1 ≤ rows, columns ≤ 100, with rows ≠ columns.
  Plow side extensions: 0 ≤ L, R ≤ 5.
*/

// <-- Solution -->
function plow(driveway, l, r) {
  driveway = driveway.split("\n");

  const w = 1 + l + r;
  const m = driveway.length;
  const n = driveway[0].length;

  if (m % w === 0 && (n % w || m < n)) {
    return driveway
      .map((row, i) =>
        [...row].map((x) => (i % w === [l, r][(i / w) & 1] ? "→←"[(i / w) & 1] : x === "~" ? x : "-")).join(""),
      )
      .join("\n");
  } else {
    return driveway
      .map((row) =>
        [...row].map((x, j) => (j % w === [r, l][(j / w) & 1] ? "↓↑"[(j / w) & 1] : x === "~" ? x : "|")).join(""),
      )
      .join("\n");
  }
}
