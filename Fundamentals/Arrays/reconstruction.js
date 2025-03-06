// <-- Tree Reconstruction -->

/*
  Given two traversals of a binary tree, in-order and pre-order, reconstruct the tree.

  background: http://en.wikipedia.org/wiki/Tree_traversal#In-order

  Example:

  // this is the tree to reconstruct:
  //        4
  //       / \
  //      /   \
  //     2     6
  //    / \   /
  //   1   3 5

  inOrder  = [1,2,3,4,5,6]
  preOrder = [4,2,1,3,6,5]

  reconstructTree(inOrder,preOrder) => [ 4
                                      , [ 2
                                        , [ 1 , [], [] ]
                                        , [ 3 , [], [] ]
                                        ]
                                      , [ 6
                                        , [ 5 , [], [] ]
                                        , []
                                        ]
                                      ]
*/

// <-- My Solution -->
function reconstructTree(inOrder, preOrder) {
  if (preOrder.length === 0) return [];
  const idx = inOrder.indexOf(preOrder[0]);
  return [
    preOrder[0],
    reconstructTree(inOrder.slice(0, idx), preOrder.slice(1, idx + 1)),
    reconstructTree(inOrder.slice(idx + 1), preOrder.slice(idx + 1)),
  ];
}

// <-- Best Solution -->
function reconstructTreeBest(xs, [y, ...ys], n = xs.indexOf(y)) {
  return n >= 0
    ? [
        y,
        reconstructTree(xs, ys.slice(0, n)),
        reconstructTree(xs.slice(n + 1), ys.slice(n)),
      ]
    : [];
}
