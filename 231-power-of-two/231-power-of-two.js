/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n === 1) return true;
  while (n >= 2) {
    n = n * 0.5;
    if (n === 1) return true;
  }
  return false;
};