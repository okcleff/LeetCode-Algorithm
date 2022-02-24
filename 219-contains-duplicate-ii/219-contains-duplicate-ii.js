/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const set = new Set(nums);
  if (nums.length === [...set].length) return false;

  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] >= 0 && i - obj[nums[i]] <= k) return true;
    obj[nums[i]] = i;
  }
  return false;
};