/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let answer = 0;
  nums.map(num => {
    if(num.toString().length % 2 === 0) answer++;
  })
  return answer;
};