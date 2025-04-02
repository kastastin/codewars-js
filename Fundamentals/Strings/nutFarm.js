// <-- Nut Farm -->

/*
  As they fall down the nuts might hit branches:

  Sometimes they bounce left.
  Sometimes they bounce right.
  Sometimes they get stuck in the tree and don't fall out at all.
  Legend
  o = a nut
  \ = branch. A nut hitting this branch bounces right
  / = branch. A nut hitting this branch bounces left
  _ = branch. A nut hitting this branch gets stuck in the tree
  . = leaves, which have no effect on falling nuts
  | = tree trunk, which has no effect on falling nuts
    = empty space, which has no effect on falling nuts
  Kata Task
  Shake the tree and count where the nuts land.

  Output - An array (same width as the tree) which indicates how many nuts fell at each position ^

  ^ See the example tests

  Notes
  The nuts are always found at the top of the tree
  Nuts do not affect the falling patterns of other nuts
  There are always enough spaces for nuts to fall between branches
  There are no branches at the extreme left/right edges of the tree matrix so it is not possible for a nut to fall "out of bounds"
*/

// <-- My Solution -->
const shakeTree = function (tree) {
  let res = [...tree[0]].map((c) => (c === "o" ? 1 : 0));

  for (let i = 1; i < tree.length; i++) {
    for (let j = 0; j < tree[i].length; j++) {
      if (tree[i][j] === "/") res[j - 1] += res[j];
      else if (tree[i][j] === "\\") res[j + 1] += res[j];

      if (/[\/\\_]/.test(tree[i][j])) res[j] = 0;
    }
  }

  return res;
};

// <-- Best Solution -->
const shakeTreeBest = function (tree) {
  const result = Array(tree[0].length).fill(0);
  tree[0].forEach((nut, c) => {
    if (nut === "o") {
      for (let r = 1; r < tree.length; r++) {
        if (tree[r][c] === "/") c--;
        if (tree[r][c] === "\\") c++;
        if (tree[r][c] === "_") return;
      }
      result[c]++;
    }
  });
  return result;
};
