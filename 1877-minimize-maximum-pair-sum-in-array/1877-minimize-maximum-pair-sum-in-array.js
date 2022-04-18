/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
  if (nums.length === 2) return nums[0] + nums[1];

  nums.sort((a, b) => a - b);
  
  const pairArr = [];
  for (let i = 0; i < nums.length / 2; i++) {
    pairArr.push(nums[i] + nums[nums.length - 1 - i]);
  }
  
  return Math.max(...pairArr);
};