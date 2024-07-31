/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  return nums.reduce((acc, curr) => acc + (curr % 3 !== 0), 0);
};