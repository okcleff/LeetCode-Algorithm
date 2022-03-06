/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let base = 1;
  let squared = base * base;
  while (squared <= num) {
    if (squared === num) return true;
    base++;
    squared = base * base;
  }
  return false;
};