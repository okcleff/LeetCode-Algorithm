/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
  if (nums.length < 3) return -1;
  
  return nums.sort((a, b) => a - b)[1];
};