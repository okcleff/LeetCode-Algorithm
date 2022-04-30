/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
  if (num === 0) return true;
  const reverse = parseInt(num.toString().split('').reverse().join(''));
  return parseInt(reverse.toString().split('').reverse().join('')) === num;
};