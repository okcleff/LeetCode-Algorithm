/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
  let answer = 0;
  let curr = 0;

  for (let i = 0; i < nums.length; i++) {
    curr += nums[i];
    if (curr === 0) answer++;
  }
    
  return answer;
};