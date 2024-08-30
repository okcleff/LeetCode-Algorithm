/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
  const map = new Map();
  
  nums.forEach(num => {
    map.set(num, map.get(num) ? map.get(num) + 1 : 1)
  })
  
  for (let [key, value] of map) {
    if (value > 2) return false;
  }
  
  return true;
};