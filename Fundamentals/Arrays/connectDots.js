// <-- Connect the Dots -->

/*
  Connect the dots in order to make a picture!

  Notes
  There are 2-26 dots labelled a b c ...
  Make lines to connect the dots a -> b, b -> c, etc
  The line char is *
  Use only straight lines - vertical, horizontal, or diagonals of a square
  The paper is rectangular - \n terminates every line
  All input is valid
*/

// <-- My Solution -->
function connectTheDots(paper) {
  const letters = paper.match(/[a-z]/g).sort();
  const arr = paper.split("\n").map((e) => e.split(""));

  for (let i = 0; i < letters.length - 1; i++) {
    const cur = letters[i];
    const next = letters[i + 1];

    let curY = arr.findIndex((row) => row.includes(cur));
    let curX = arr[curY].findIndex((col) => col === cur);

    const nextY = arr.findIndex((row) => row.includes(next));
    const nextX = arr[nextY].findIndex((col) => col === next);

    const dirY = Math.sign(nextY - curY);
    const dirX = Math.sign(nextX - curX);

    let dist = Math.max(Math.abs(curY - nextY), Math.abs(nextX - curX)) - 1;

    for (let j = 0; j < dist; j++) {
      curY += dirY;
      curX += dirX;
      if (!/[a-z]/.test(arr[curY][curX])) arr[curY][curX] = "*";
    }
  }

  return arr.map((row) => row.join("").replace(/[a-z]/g, "*")).join("\n");
}

// <-- Best Solution -->
function connectTheDotsBest(paper) {
  paper = paper
    .slice(0, -1)
    .split("\n")
    .map((s) => [...s]);

  paper
    .reduce(
      (a, r, i) =>
        r.reduce((a, c, j) => (c == " " || a.push({ c, i, j }), a), a),
      [],
    )
    .sort((a, b) => (a.c < b.c ? -1 : 1))
    .forEach((d, i, a) => {
      if (!i) {
        return (paper[d.i][d.j] = "*");
      } else {
        a = a[i - 1];
      }

      const dr = Math.sign(d.i - a.i);
      const dc = Math.sign(d.j - a.j);

      do {
        paper[(a.i += dr)][(a.j += dc)] = "*";
      } while (a.i != d.i || a.j != d.j);
    });

  return paper.reduce((s, r) => s + r.join("") + "\n", "");
}
