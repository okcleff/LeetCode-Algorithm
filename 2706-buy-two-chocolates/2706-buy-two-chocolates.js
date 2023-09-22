/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
  prices.sort((a, b) => a - b);
  const left = money - (prices[0] + prices[1]);
  return left >= 0 ? left : money;
};