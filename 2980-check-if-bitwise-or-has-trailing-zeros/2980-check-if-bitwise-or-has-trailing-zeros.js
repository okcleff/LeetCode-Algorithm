/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const bitwiseOr = (nums[i] | nums[j]).toString(2);
      if (bitwiseOr.endsWith('0')) return true;
    }
  }
  
  return false;
};