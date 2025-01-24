/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
  const leng = nums.length;
  let maxDiff = 0;

  for (let i = 0; i < leng; i++) {
    const diff = Math.abs(nums[i] - nums[(i + 1) % leng]);
    maxDiff = Math.max(maxDiff, diff);
  }

  return maxDiff;
};