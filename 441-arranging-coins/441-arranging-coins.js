/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let idx = 1;
  while (n >= idx) {
    n -= idx;
    idx++;
  }
  return idx - 1;
};