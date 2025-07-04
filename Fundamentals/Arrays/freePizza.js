// <-- Free pizza -->

/*
  In an attempt to boost sales, the manager of the pizzeria you work at has devised a pizza rewards system: if you already made at least 5 orders of at least 20 dollars, you get a free 12 inch pizza with 3 toppings of your choice.

  However, the rewards system may change in the future. Your manager wants you to implement a function that, given a dictionary of customers, a minimum number of orders and a minimum order value, returns a set of the customers who are eligible for a reward.

  Customers in the dictionary are represented as:

  { 'customerName' : [list_of_order_values_as_integers] }
*/

// <-- My Solution -->
function pizzaRewards(customers, minOrders, minPrice) {
  const result = [];

  for (const c in customers) {
    let count = 0;

    for (const o of customers[c]) {
      if (o >= minPrice) ++count;
    }

    if (count >= minOrders) result.push(c);
  }

  return result;
}

// <-- Best Solution -->
function pizzaRewardsBest(customers, minOrders, minPrice) {
  return Object.keys(customers).filter(
    (e) => customers[e].filter((o) => o >= minPrice).length >= minOrders,
  );
}
