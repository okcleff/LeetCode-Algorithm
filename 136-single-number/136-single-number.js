/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] ? obj[nums[i]]++ : (obj[nums[i]] = 1);
  }
  for (let key in obj) {
    if (obj[key] === 1) {
      return parseInt(key);
    }
  }
};