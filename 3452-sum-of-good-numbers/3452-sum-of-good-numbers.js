/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
  return nums.reduce((acc, curr, i) => {
    const leftIndex = i - k;
    const rightIndex = i + k;

    const isLeftGreater = leftIndex < 0 || curr > nums[leftIndex];
    const isRightGreater = rightIndex >= nums.length || curr > nums[rightIndex];

    return acc + (isLeftGreater && isRightGreater ? curr : 0);
  }, 0)
};