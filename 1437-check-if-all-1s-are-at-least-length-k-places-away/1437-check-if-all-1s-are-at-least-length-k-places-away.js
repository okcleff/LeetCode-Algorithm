/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
  const firstOneIndex = nums.findIndex(num => num === 1);
  
  let distance = 0;
  for (let i = firstOneIndex + 1; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (distance < k) {
        return false;
      }
      distance = 0;
    } else {
      distance++;
    }
  }
  
  return true;
};