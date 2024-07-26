/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
  const map = new Map();
  
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === key) {
      map.set(nums[i + 1], map.get(nums[i + 1]) ? map.get(nums[i + 1]) + 1 : 1)
    }
  }
  
  let maxTarget;
  let maxCount = -Infinity;
    
  for (const [target, frequency] of map) {
    if (frequency > maxCount) {
      maxCount = frequency;
      maxTarget = target;
    }
  }
    
  return maxTarget;
};