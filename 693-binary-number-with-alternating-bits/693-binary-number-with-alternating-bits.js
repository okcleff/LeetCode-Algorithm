/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  const bit = n.toString(2);
  for (let i = 0; i < bit.length - 1; i++) {
    if (bit[i] === bit[i + 1]) return false;
  }
  return true;
};