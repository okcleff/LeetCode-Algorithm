/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  const answer = [];
  nums.map(num => {
    num % 2 ? answer.push(num) : answer.unshift(num);
  })
  return answer;
};