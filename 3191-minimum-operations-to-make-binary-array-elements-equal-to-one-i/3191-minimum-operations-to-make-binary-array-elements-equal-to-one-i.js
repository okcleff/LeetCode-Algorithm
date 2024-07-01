/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if(i > nums.length - 3) return -1;
      
      nums[i] = 1;
      nums[i + 1] = nums[i + 1] ? 0 : 1;
      nums[i + 2] = nums[i + 2] ? 0 : 1;
      answer++;
    }
  }

  return answer;
};