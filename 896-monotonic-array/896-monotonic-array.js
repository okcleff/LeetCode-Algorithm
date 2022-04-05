/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  if (nums.length === 1 || nums.length === 2) return true;
  const first = nums[0];
  const last = nums[nums.length - 1];
  if (first > last) {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] < nums[i + 1]) return false;
    }
  } else if (first < last) {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) return false;
    }
  } else if (first === last) {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] !== nums[i + 1]) return false;
    }
  }
  return true;
};