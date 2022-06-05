/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
  let min = nums[0];
  let diff = -1
  
  for(let i = 1; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
    diff = Math.max(diff, nums[i] - min);
  }
  
  return diff === 0 ? -1 : diff;  
};