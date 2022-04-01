/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i += 2) {
    let arr = [];
    for (let j = 0; j < nums[i]; j++) {
      arr.push(nums[i + 1]);
    }
    result = [...result, ...arr];
  }
  return result;
};