/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
  nums.sort((a, b) => a - b);
  
  const leng = nums.length;
  if (nums[leng - 1] !== nums[leng - 2]) return false;
  

  
  for (let i = 0; i < leng - 1; i++) {
    if (nums[i] !== i + 1) return false;
  }
  
  return true;
};