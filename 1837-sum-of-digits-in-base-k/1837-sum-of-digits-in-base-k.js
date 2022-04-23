/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
  return [...n.toString(k)].reduce((a, b) => Number(a) + Number(b));
};