// <-- Tree Depth -->

/*
  Write a method that takes a nested hash (object in javascript) as input and returns that hash with added "depth" keys. So, for example, the following input:

  { a: 1, b: 2, c: { d: { e: 3 } } }
  would yield the following return value:

  { a: 1, b: 2, c: { d: { e: 3, depth: 2 }, depth: 1 }, depth: 0 }
  For Ruby, if the input is not a hash, then the function should return nil. For JavaScript, if the input is not an object (including an array), the function should return null.
*/

// <-- My Solution -->
function recordDepth(tree, depth = 0) {
  if (!(tree !== null && typeof tree === "object" && tree.constructor === Object)) {
    return null;
  }

  for (const value of Object.values(tree)) {
    recordDepth(value, depth + 1);
  }

  return Object.assign(tree, { depth });
}

// <-- Best Solution -->
function recordDepthBest(tree, depth = 0) {
  if (!tree || tree.constructor != Object) {
    return null;
  }

  tree.depth = depth;

  Object.keys(tree).forEach((x) => recordDepthBest(tree[x], depth + 1));

  return tree;
}
