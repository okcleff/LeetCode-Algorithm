/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  if (nums.length === 1) return nums[0];

  const set = new Set(nums);
  const sorted = [...set].sort((a, b) => b - a);

  return sorted.length >= 3 ? sorted[2] : sorted[0];
  
};