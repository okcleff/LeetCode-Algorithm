/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
  let answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    if (
      nums.indexOf(nums[i] + diff) !== -1 &&
      nums.indexOf(nums[i] + diff * 2) !== -1
    )
      answer++;
  }
  return answer;
};