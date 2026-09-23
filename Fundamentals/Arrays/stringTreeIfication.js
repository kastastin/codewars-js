// <-- String tree - ification -->

/*
  Write a function that takes in a nonempty string and converts it into a binary tree object.

  Here we convert the string 'great' into a binary tree:

      great
    /    \
    gr    eat
  / \    /  \
  g   r  e   at
            / \
            a   t

  Rules
  A leaf of the tree is a node of length 1.
  At each step, if the node is not a leaf, the string should be split in half at the middle.
  If the length is odd, the right half is the one that must include the middle character.
  Every node of the tree has a value property that contains the string value of that node
  Every node of the tree has a type property:
  the original input is of type "root"
  a leaf is of type "leaf"
  anything else is of type "node"
  Non-leaf nodes have left and right properties that point to their children
*/

// <-- Solution -->
function word2Tree(value, type = "root") {
  if (value.length < 2) {
    return { value, type: "leaf" };
  }

  const half = value.length >> 1;

  return {
    value,
    left: word2Tree(value.slice(0, half), "node"),
    right: word2Tree(value.slice(half), "node"),
    type,
  };
}
