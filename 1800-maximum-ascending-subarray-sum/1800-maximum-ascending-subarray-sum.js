/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  let answer = 0;
  let curr = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      curr += nums[i];
    } else {
      answer = Math.max(answer, curr);
      curr = nums[i];
    }
  }
  return Math.max(answer, curr);
};