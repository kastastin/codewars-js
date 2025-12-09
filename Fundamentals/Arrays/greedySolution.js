// <-- The Greedy Solution -->

/*
  Write the function knapsack that takes two parameters, capacity and items, and returns a list of quantities.

  capacity will be a positive number

  items will be an array of arrays of positive numbers that gives the items' sizes and values in the form [[size 1, value 1], [size 2, value 2], ...]

  knapsack will return an array of integers that specifies the quantity of each item to take according to the greedy solution (the order of the quantities must match the order of items)
*/

// <-- My Solution -->
function knapsack(capacity, items) {
  return items
    .map((item, index) => {
      item[2] = index;
      return item;
    })
    .sort((item1, item2) => item2[1] / item2[0] - item1[1] / item1[0])
    .reduce((result, item) => {
      const quantity = Math.floor(capacity / item[0]);
      result[item[2]] = quantity;
      capacity -= quantity * item[0];
      return result;
    }, new Array(items.length));
}

// <-- Best Solution -->
function knapsackBest(capacity, items) {
  return items
    .map(([s, v], i) => [s, v, i])
    .sort(([sA, vA], [sB, vB]) => vB / sB - vA / sA)
    .map(([s, v, i]) => [(capacity - (capacity %= s)) / s, i])
    .sort(([, iA], [, iB]) => iA - iB)
    .map(([qty]) => qty);
}
