/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) === 2) return false;
    map.set(nums[i], map.get(nums[i]) ? map.get(nums[i]) + 1 : 1);
  }
  
  return true;
};