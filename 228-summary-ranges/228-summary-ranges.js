/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let result = [];
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1] - 1) {
      if (pointer === i) result.push(`${nums[i]}`);
      else result.push(`${nums[pointer]}->${nums[i]}`);
      pointer = i + 1;
    }
  }
  return result;
};