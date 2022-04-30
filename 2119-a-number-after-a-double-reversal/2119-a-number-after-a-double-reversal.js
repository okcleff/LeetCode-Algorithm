/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
  if (num === 0) return true;
  return num % 10 ? true : false;
};