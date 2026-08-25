// <-- Shopping Spree -->

/*
  Bob enjoys playing a certain video game. Recently, he received P pennies as pocket money and decided to spend them on in-game items.

  There are N items arranged in order in a shop. Bob always starts with the first item and tries to unlock as many consecutive items as possible.

  Bob has two ways to unlock an item:

  Pay with pennies: He can purchase an item using his available pennies. The items have their respective prices.
  Use a discount coupon: After winning a gaming contest, Bob received two discount coupons. Each coupon can be used to unlock one item completely for free. Each coupon can be used only once.
  Bob wants to use his pennies and the two coupons in the best possible way so that he unlocks the maximum number of consecutive items starting from the first item.

  He must stop as soon as he cannot unlock the next item. In particular, if he decides not to unlock an item, he cannot unlock any item that comes after it.

  Determine the maximum number of items Bob can unlock.

  Input:

  p = 15
  shop = [10, 6, 2, 12, 9]
  Output:

  4
  Explanation: There are multiple ways to purchase 4 items. One of them is: Buy {10, 6} with coupons and {2, 12} using 14 pennies. There is no way to buy all 5 items.
*/

// <-- Solution -->
function shoppingSpree(p, shop) {
  let m1 = 0;
  let m2 = 0;
  let s = 0;

  for (let i = 0; i < shop.length; i++) {
    const x = shop[i];

    if (x >= m1) {
      [m1, m2] = [x, m1];
    } else if (x > m2) {
      m2 = x;
    }

    s += x;

    if (s - m1 - m2 > p) {
      return i;
    }
  }

  return shop.length;
}
