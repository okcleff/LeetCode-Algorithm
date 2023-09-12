/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
  nums.sort((a, b) => b - a);
  
  let answer = Infinity;
  
  for (let i = 0; i <= nums.length - k; i ++) {
    answer = Math.min(answer, nums[i] - nums[i + k - 1]);
  }
  
  return answer;
};