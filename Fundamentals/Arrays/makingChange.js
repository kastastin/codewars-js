// <-- Making Change -->

/*
  Complete the method that will determine the minimum number of coins needed to make change for a given amount in American currency.

  Coins used will be half-dollars, quarters, dimes, nickels, and pennies, worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively. They'll be represented by the symbols/strings H, Q, D, N and P.

  The argument passed in will be an integer representing the value in cents. The return value should be a hash/dictionary/object with the symbols as keys, and the numbers of coins as values. Coins that are not used should not be included in the hash. If the argument passed in is 0, then the method should return an empty hash.

  Examples
  input = 0  => output = {}
  input = 1  => output = {'P': 1}
  input = 43 => output = {'Q': 1, 'D': 1, 'N': 1, 'P': 3}
  input = 91 => output = {'H': 1, 'Q': 1, 'D': 1, 'N': 1, 'P': 1}
*/

// <-- My Solution -->
const makeChange = (amount) => {
  if (amount <= 0) return {};

  const out = {};

  const coins = [50, 25, 10, 5, 1];
  const names = ["H", "Q", "D", "N", "P"];

  while (amount) {
    for (let i = 0; i < coins.length; i++) {
      const c = (amount / coins[i]) | 0;

      if (c > 0) {
        out[names[i]] = c;
        amount -= c * coins[i];
      }
    }
  }

  return out;
};

// <-- Best Solution -->
function makeChangeBest(amount) {
  const hash = {};
  const values = { H: 50, Q: 25, D: 10, N: 5, P: 1 };

  for (const [key, value] of Object.entries(values)) {
    const newKey = Math.floor(amount / value);

    if (newKey !== 0) {
      hash[key] = newKey;
    }

    amount = amount % value;
  }
  
  return hash;
}
