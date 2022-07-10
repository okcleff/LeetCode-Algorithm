/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
  if(nums.includes(0)) return 0;
  const product = nums.reduce((acc, curr) => acc * curr);
  return product > 0 ? 1 : -1;
};