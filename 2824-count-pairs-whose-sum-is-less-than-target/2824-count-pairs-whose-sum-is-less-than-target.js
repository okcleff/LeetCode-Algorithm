/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
  const leng = nums.length;
  let answer = 0;

  for (let i = 0; i < leng - 1; i++) {
    for (let j = i + 1; j < leng; j++) {
      if (nums[i] + nums[j] < target) {
        answer++;
      }
    }
  }

  return answer;
};