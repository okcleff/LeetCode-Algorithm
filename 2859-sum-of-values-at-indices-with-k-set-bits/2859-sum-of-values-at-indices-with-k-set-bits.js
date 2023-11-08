/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
  let answer = 0;
  const leng = nums.length;
  
  for (let i = 0; i < leng; i++) {
    if(i.toString(2).replaceAll('0', "").length === k) answer += nums[i];
  }
  
  return answer;
};