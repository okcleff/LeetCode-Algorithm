/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function(n) {
  const x = Math.ceil((-1 + Math.sqrt(1 + 8 * n)) / 2);
  return x;
};