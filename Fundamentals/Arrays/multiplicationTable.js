// <-- Multiplication table -->

/*
  Your task, is to create N×N multiplication table, of size provided in parameter.

  For example, when given size is 3:

  1 2 3
  2 4 6
  3 6 9
  For the given example, the return value should be:

  [[1,2,3],[2,4,6],[3,6,9]]
*/

// <-- My Solution -->
function multiplicationTable(size) {
  const table = [];

  for (i = 1; i <= size; i++) {
    const row = [];

    for (j = 1; j <= size; j++) {
      row.push(i * j);
    }

    table.push(row);
  }

  return table;
}

// <-- Best Solution -->
function multiplicationTableBest(n) {
  return Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i + 1) * (j + 1)));
}
