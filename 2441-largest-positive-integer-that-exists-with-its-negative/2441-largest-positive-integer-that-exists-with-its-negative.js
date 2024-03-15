/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
  let answer = -1;
  nums.sort((a, b) => b - a);
  let i = 0;
  while (nums[i] > 0) {
    if (nums.includes(nums[i] * -1)) {
      return answer = nums[i];
    }
    i++;
  }
  return answer;
};