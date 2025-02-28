// <-- Price of Phone -->

/*
  You work in a mobile phone store, your job is to determine the sales price of mobile phones. You need to ensure that at least 15% of the profit after each mobile phone is sold. For example: A phone's cost price is $100, its sales price should be $115.

  An additional requirement: mobile phone sales price must be first rounded to an integer, then adjusted up so that the last digit is 5 or 0. For example: A phone's cost price is $120, after add profits 15%, the sales price should be $138, but the last digit is 8, so you need "ceil" it to $140.

  You've got a list, it has the cost price of mobile phones that need to be sold:

  iPhone 7 cost price: $800
  Samsung note 7 cost price: $600
  iPad pro cost price: $700
  You need to generate a list of sales prices:

  iPhone 7 sale price: $920
  Samsung note 7 sale price: $690
  iPad pro sale price: $805
*/

// <-- My Solution -->
function salePrice(cost) {
  let f = (m) =>
    "$" + Math.ceil(Math.round(m.slice(1) * 1.15 + 0.0001) / 5) * 5;

  return cost.replaceAll(/\$(\d+)/g, f).replaceAll("cost", "sale");
}

// <-- Best Solution -->
const salePriceBest = (cost) =>
  cost.replace(/\bcost\b/gi, "sale").replace(/(?<=\$)(\d+)/g, (p) => {
    let price = p * 1.15;

    price = price - ~~price < 0.49 ? ~~price : Math.ceil(price);

    return price % 5 ? price + 5 - (price % 5) : price;
  });
