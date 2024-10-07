/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  const maxNum = Math.max(...nums);
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== maxNum && nums[i] * 2 > maxNum) return -1;
  }
  
  return nums.indexOf(maxNum);
};