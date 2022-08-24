/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  return nums.sort((a, b) => {
    if (a % 2 === 0) return -1;
  });
};