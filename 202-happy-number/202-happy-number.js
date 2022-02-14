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
    if (arr[n]) return false;
    arr[n] = true;
  }
  return true;
};