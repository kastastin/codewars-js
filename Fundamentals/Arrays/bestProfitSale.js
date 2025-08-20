// <-- Best Stock Profit in Single Sale -->

/*
  You're a buyer/seller and your business is at stake .. You need to make a profit .. Or at least, you need to lose the least amount of money!
  Knowing a list of prices for buy/sell operations, you need to pick two of them. Buy/sell market is evolving across time and the list represent this evolution. First, you need to buy one item, then sell it later. Find the best profit you can do.

  Example:
  Given an array of prices [3, 10, 8, 4], the best profit you could make would be 7 because you buy at 3 first, then sell at 10.

  Input:
  A list of prices (integers), of length 2 or more.

  Output:
  The result of the best buy/sell operation, as an integer.
*/

// <-- My Solution -->
const maxProfit = (prices) => {
  let leastPrice = prices[0];
  let maxProfit = prices[1] - prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - leastPrice > maxProfit) {
      maxProfit = prices[i] - leastPrice;
    }

    if (leastPrice > prices[i]) {
      leastPrice = prices[i];
    }
  }

  return maxProfit;
};

// <-- Best Solution -->
function maxProfitBest(prices) {
  let minPrice = prices[0];
  let maxProfit = prices[1] - prices[0];

  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i];
    let profit = currentPrice - minPrice;

    if (profit > maxProfit) {
      maxProfit = profit;
    }

    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }
  }

  return maxProfit;
}
