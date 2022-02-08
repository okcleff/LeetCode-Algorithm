/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const set = [...new Set(nums)];
  nums.splice(0, nums.length);
  set.map((el) => nums.push(el));
  return nums.length;
};