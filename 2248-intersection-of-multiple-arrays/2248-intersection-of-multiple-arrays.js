/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
  const answer = [];

  for (let i = 0; i < nums[0].length; i++) {
    if (nums.every((arr) => arr.includes(nums[0][i]))) {
      answer.push(nums[0][i]);
    }
  }

  return answer.sort((a, b) => a - b);
};