/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
  if (nums.length <= 1) return true;
  
  let answer = true;
  
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] % 2 === nums[i + 1] % 2) {
      return answer = false;
    }
  }
  
  return answer;
};