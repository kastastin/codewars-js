// <-- Sum The Tree -->

/*
  Given a node object representing a binary tree:

  example of a node object:
  const node = {
    value: 1,
    left: {value: 2, right: null, left: null},
    right: null
  };
  write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a null value.

  Examples:

  10
  | \
  1  2
  => 13

  1
  | \
  0  0
      \
      2
  => 3
*/

// <-- Solution -->
function sumTheTreeValues(root) {
  let val = root.value;

  if (root.left != null) {
    val += sumTheTreeValues(root.left);
  }

  if (root.right != null) {
    val += sumTheTreeValues(root.right);
  }

  return val;
}
