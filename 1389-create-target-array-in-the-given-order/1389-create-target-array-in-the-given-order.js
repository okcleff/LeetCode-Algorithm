/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  let answer = []; 
  nums.map((num, idx) => {
    return answer.splice(index[idx], 0, num);
  });
  return answer;
};