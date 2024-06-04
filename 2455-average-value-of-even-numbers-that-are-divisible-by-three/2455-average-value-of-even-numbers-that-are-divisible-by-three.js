/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
  let count = 0;
  let sum = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 6 === 0) {
      count++;
      sum += nums[i]
    }
  }
  
  return count ? Math.floor(sum / count) : 0;
};