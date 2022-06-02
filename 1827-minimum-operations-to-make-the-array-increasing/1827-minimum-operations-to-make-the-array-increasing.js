/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      const gap = nums[i - 1] - nums[i] + 1;
      count += gap;
      nums[i] += gap;
    }
  }
  return count;
};