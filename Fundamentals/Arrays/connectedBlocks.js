// <-- Connected blocks -->

/*
  Given a 10x10 grid of 100 cells, with columns indexed 0 to 9 (left to right) and rows indexed 0 to 9 (bottom to top). The input of your program will be a comma-separated string of cell identifiers, identifyng the cells that are coloured black. Each cell identifier is a two digit number of the form <column_index><row_index>.

  For example, an input of 18,00,95,40,36,26,57,48,54,65,76,87,97,47 represents the following grid:

  When given this input, your program should output the size of the largest block of connected black cells, witch is outlined in red in the example above. So in this case your program would return 3.

  Note that two black cells are considered to be connected if they share an edge, but they are not connected if the share only a corner.

  The input could have some cells with invalid format or repeated cells that should not be taken into account.

  For example: 00,00,111,1,1a is the same as 00
*/

// <-- My Solution -->
function solution(input) {
  const visited = new Set();
  const grid = Array.from({ length: 10 }, (_, i) => Array.from({ length: 10 }, (_, i) => 0));

  for (let x of input.split(`,`)) {
    if (/^\d\d$/.test(x)) {
      const i = +x[0];
      const j = +x[1];

      grid[i][j] = 1;
    }
  }

  if (grid.every((x) => x.every((y) => !y))) return 0;

  let maxi = -Infinity;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (grid[i][j] == 1 && !visited.has(`${i} ${j}`)) {
        const stack = [[i, j]];

        visited.add(`${i} ${j}`);

        let n = 1;

        while (stack.length) {
          const [x, y] = stack.pop();

          for (let [x1, y1] of [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
          ]) {
            const r = x + x1;
            const c = y + y1;

            if (r >= 0 && r < 10 && c >= 0 && c < 10 && grid[r][c] && !visited.has(`${r} ${c}`)) {
              visited.add(`${r} ${c}`);
              n++;
              stack.push([r, c]);
            }
          }
        }

        if (n > maxi) maxi = n;
      }
    }
  }

  return maxi;
}

// <-- Best Solution -->
function solution(blocks) {
  const res = 0;
  blocks = new Set(`,${blocks},`.match(/(?<=,)\d\d(?=,)/g) || []);

  while (blocks.size) {
    const block = blocks.keys().next().value;
    const Q = [block];

    blocks.delete(block);

    let cnt = 1;

    for (const [r, c] of Q) {
      for (const neighbour of [`${r - 1}${c}`, `${r}${c - 1}`, `${r}${+c + 1}`, `${+r + 1}${c}`]) {
        if (blocks.has(neighbour)) {
          cnt++;
          Q.push(neighbour);
          blocks.delete(neighbour);
        }
      }
    }

    if (cnt > res) res = cnt;
  }
  
  return res;
}
