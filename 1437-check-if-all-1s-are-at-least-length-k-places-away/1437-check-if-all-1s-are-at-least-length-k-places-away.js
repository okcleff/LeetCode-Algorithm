/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
  let firstOneIndex = null;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      firstOneIndex = i;
      break;
    }
  }
  
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