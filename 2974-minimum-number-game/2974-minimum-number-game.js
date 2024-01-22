/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
  nums.sort((a, b) => b - a);
  const answer = [];
  while (nums.length) {
    const min1 = nums.pop();
    const min2 = nums.pop();
    answer.push(min2);
    answer.push(min1);
  }
  return answer;
};