/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
  const leng = nums.length;
  let answer = 0;
  
  for (let i = 1; i <= leng; i++) {
    if (leng % i === 0) {
      answer += nums[i - 1] ** 2;
    }
  }
  
  return answer;
};