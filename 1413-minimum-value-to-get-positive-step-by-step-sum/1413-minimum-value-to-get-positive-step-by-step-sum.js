/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
  let min = Infinity;
  let sum = 0;

  for (let num of nums) {
    min = Math.min(min, (sum += num));
  }

  return min >= 1 ? 1 : Math.abs(min - 1);
};