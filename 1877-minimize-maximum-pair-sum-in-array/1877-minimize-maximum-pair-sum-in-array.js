/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
  if (nums.length === 2) return nums[0] + nums[1];

  nums.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < nums.length / 2; i++) {
    result = Math.max(result, nums[i] + nums[nums.length - 1 - i]);
  }

  return result;
};