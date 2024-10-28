/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
  nums.sort((a, b) => a - b);
  
  const answer = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) answer.push(nums[i]);
  }
  
  return answer;
};