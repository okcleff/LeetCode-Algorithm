/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
  const leng = nums.length;
  let answer = 0;

  for (let i = 0; i < leng - 2; i++) {
    for (let j = i + 1; j < leng - 1; j++) {
      if (nums[i] !== nums[j]) {
        for (let k = j + 1; k < leng; k++) {
          if (nums[k] !== nums[i] && nums[k] !== nums[j]) answer++;
        }
      }
    }
  }

  return answer;
};