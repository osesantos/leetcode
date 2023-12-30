// Sliding window alg
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max_profit = 0;
  let y = 0;
  for (let i = 0; i < prices.length; i++) {
    const profit = prices[i] - prices[y];
    if (profit > 0) {
      max_profit = Math.max(profit, max_profit);
    } else {
      y = i;
    }

  }

  return max_profit;
};

console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1])); // 0
console.log(maxProfit([2,4,1])); // 2
