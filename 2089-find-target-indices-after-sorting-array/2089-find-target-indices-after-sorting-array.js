/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
  nums.sort((a, b) => a - b);
  const answer = [];
  nums.map((num, idx) => {
    if (num === target) answer.push(idx);
  });
  return answer;
};