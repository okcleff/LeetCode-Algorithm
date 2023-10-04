/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  const hash = {};
  
  for (let num of nums) {
    if (hash[num]) {
      hash[num] = hash[num] + 1;
    } else {
      hash[num] = 1;
    }
  }
  
  let i = 0;
  for (let num of ['0', '1', '2']) {
    while (hash[num]) {
      nums[i] = +num;
      hash[num] = hash[num] - 1;
      i++;
    }
  }
};