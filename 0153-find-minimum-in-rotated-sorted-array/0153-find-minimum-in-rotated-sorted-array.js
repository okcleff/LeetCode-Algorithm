/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
    
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
        
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
    
  return nums[left];
};