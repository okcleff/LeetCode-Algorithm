/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
  return num.replace(/0+$/, '');
};