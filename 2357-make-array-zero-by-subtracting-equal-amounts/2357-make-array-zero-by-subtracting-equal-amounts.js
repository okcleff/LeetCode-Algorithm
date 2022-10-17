/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  return new Set(nums.filter(x => x !== 0)).size
};