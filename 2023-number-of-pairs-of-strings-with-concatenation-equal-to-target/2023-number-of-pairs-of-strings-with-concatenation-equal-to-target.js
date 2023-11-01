/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function(nums, target) {
  const leng = nums.length;
  let answer = 0;
  
  for (let i = 0; i < leng; i++) {
    for (let j = 0; j <leng; j++) {
      if (i === j) continue;
      if (nums[i] + nums[j] === target) answer++;
    }
  }
  
  return answer;
};