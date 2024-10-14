/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
  let count = 0;
  const lastIdx = nums.length - 1;
  for (let i = 0; i < lastIdx; i++){
    if (nums[i] > nums[i+1]) count++;
  }
    
  if (count > 1 || (count == 1 && nums[0] < nums[lastIdx])) return false;
    
  return true;
};