/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
  return n
    .toString()
    .split('')
    .map((num, i) => (i % 2 === 0 ? +num : -num))
    .reduce((acc, curr) => acc + curr);
};