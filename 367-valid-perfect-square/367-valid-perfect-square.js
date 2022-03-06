/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) return true;
  let result = 1;
  while (result < num) {
    if (result * result === num) return true;
    result++;
  }
  return false;
};