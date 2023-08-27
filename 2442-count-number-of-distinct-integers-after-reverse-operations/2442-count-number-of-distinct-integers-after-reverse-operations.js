/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
  nums.push(...nums.map((c) => +[...String(c)].reverse().join("")));
  return new Set(nums).size;
};