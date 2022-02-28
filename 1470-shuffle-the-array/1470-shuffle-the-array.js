/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  if (nums.length === 2) return nums;
  const half = nums.splice(nums.length / 2);
  const result = [];
  for (let i = 0; i < half.length; i++) {
    result.push(nums[i]);
    result.push(half[i]);
  }
  return result;
};