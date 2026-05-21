// <-- Binary search tree validation -->

/*
  In this kata, you will write a function that will validate that a given binary tree is a binary search tree. The sort order is not predefined so it should work with either.

  These are valid binary search trees:

      5
    / \
    2   7
  / \   \
  1   3   9


    7
  / \
  9   2
  while these are not:

    1
  / \
  2   3


    5
  / \
  2   9
  \
    7

*/

// <-- Solution -->
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function isBST(node) {
  const values = flattenTree(node);

  return values.every((v, i, a) => i === 0 || v < a[i - 1]) || values.every((v, i, a) => i === 0 || v > a[i - 1]);
}

function flattenTree(node) {
  return node ? [...flattenTree(node.left), node.value, ...flattenTree(node.right)] : [];
}
