/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
  return n % 2 ? (n * n - 1) / 4 : n * n / 4
};