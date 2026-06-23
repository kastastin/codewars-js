// <-- Tree to list -->

/*
  Given the root of a tree with an arbitrary number of child nodes, return a list containing the nodes' data in breadth-first order (left to right, top to bottom).

  Child nodes are stored in a list. An empty tree is represented by an empty list.

  Example:

            1
            / \
          2   3  -> [1,2,3,4,5,6,7]
          /|\   \
        4 5 6   7
*/

// <-- Solution -->
function treeToArray(tree) {
  if (Array.isArray(tree)) {
    return [];
  }

  const values = [];
  const nodesToSearch = [tree];

  while (nodesToSearch.length) {
    const node = nodesToSearch.shift();

    values.push(node.data);
    nodesToSearch.push(...node.children);
  }

  return values;
}
