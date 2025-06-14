// <-- Playing with passphrases -->

/*
  In an attempt to boost sales, the manager of the pizzeria you work at has devised a pizza rewards system: if you already made at least 5 orders of at least 20 dollars, you get a free 12 inch pizza with 3 toppings of your choice.

  However, the rewards system may change in the future. Your manager wants you to implement a function that, given a dictionary of customers, a minimum number of orders and a minimum order value, returns a set of the customers who are eligible for a reward.

  Customers in the dictionary are represented as:

  { 'customerName' : [list_of_order_values_as_integers] }
*/

// <-- My Solution -->
function playPass(s, n) {
  return s
    .replace(/[A-Z]/g, function (char) {
      return String.fromCharCode(((char.charCodeAt(0) - 65 + n) % 26) + 65);
    })
    .replace(/[a-z]/g, function (char) {
      return String.fromCharCode(((char.charCodeAt(0) - 97 + n) % 26) + 97);
    })
    .replace(/\d/g, function (digit) {
      return 9 - digit;
    })
    .replace(/(.)(.?)/g, function (match, odd, even) {
      return odd.toUpperCase() + even.toLowerCase();
    })
    .split("")
    .reverse()
    .join("");
}

// <-- Best Solution -->
function playPassBest(s, n) {
  return s
    .replace(/[A-Z]/g, (l) =>
      String.fromCharCode(((l.charCodeAt(0) + n - 65) % 26) + 65),
    )
    .replace(/\d/g, (d) => 9 - d)
    .split("")
    .map((l, i) => (i % 2 == 0 ? l.toUpperCase() : l.toLowerCase()))
    .reverse()
    .join("");
}
