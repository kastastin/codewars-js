// <-- Minimum dollar bill's count -->

/*
  Find the minimum dollar bill's count to represent some value based on the availables bills.

  You will recieve the value and an array as input (the array contains the available bills).

  For instance:
  minimumBillCount(100, [10, 50, 20]) should return 2; (2x$50)
  minimumBillCount(500, [100, 50, 20]) should return 5; (5x$100)
  minimumBillCount(40, [1, 10, 20]) should return 2; (2x$20)
  minimumBillCount(5, [1, 10, 20]) should return 5; (5x$1)

  It is guaranteed that the value can always be divided into given bills, and there are no "tricky" edge cases.
*/

// <-- My Solution -->
function minimumBillCount(value, availables) {
  const denoms = availables.sort((a, b) => b - a);

  let totalBills = 0;

  for (const denom of denoms) {
    while (value >= denom) {
      totalBills++;
      value -= denom;
    }
  }

  return totalBills;
}

// <-- Best Solution -->
function minimumBillCountBest(value, availables) {
  return availables
    .sort((a, b) => b - a)
    .reduce((count, available) => ((count += (value / available) | 0), (value %= available), count), 0);
}
