/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  for (let i = 0; i < k; i++) {
    const min = Math.min(...nums);
    const minIdx = nums.indexOf(min);
    nums[minIdx] *= -1;
  }
  
  return nums.reduce((acc, curr) => acc + curr, 0);
};