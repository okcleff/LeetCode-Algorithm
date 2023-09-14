/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
  const set = new Set();
  
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums[i][0]; j <= nums[i][1]; j++) {
      set.add(j);
    }
  }
  
  return set.size;
};