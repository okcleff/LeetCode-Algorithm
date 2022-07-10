/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
  if(nums.includes(0)) return 0;
  return nums.filter(num => num < 0).length % 2 === 0 ? 1 : -1;
};