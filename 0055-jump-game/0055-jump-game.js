/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (max < i) return false;
    max = Math.max(nums[i] + i, max);
  }

  return true;
};