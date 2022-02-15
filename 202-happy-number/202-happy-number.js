/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const arr = [];
  while (n !== 1) {
    n = n
      .toString()
      .split('')
      .reduce((a, b) => a + b * b, 0);
    if (arr.indexOf(n) !== -1) return false;
    arr.push(n);
  }
  return true;
};