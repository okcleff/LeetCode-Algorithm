/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    while (nums[i] <= nums[i - 1]) {
      nums[i]++;
      count++;
    }
  }
  return count;
};