/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const answer = new Array(nums.length).fill(1);
    
  let base = 1;
    
  for (let i = 0; i < nums.length; i++) {
    answer[i] *= base;
    base *= nums[i];
  }
    
  base = 1;
    
  for (let j = nums.length - 1; j >= 0; j--) {
    answer[j] *= base;
    base *= nums[j];
  }
    
  return answer;
};