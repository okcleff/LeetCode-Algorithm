/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
  nums = nums.filter((a, i, b) => a !== b[i + 1]);
  
  let answer = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i - 1] > nums[i] && nums[i] < nums[i + 1]) answer++;
    if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) answer++;
  }
  return answer;
};