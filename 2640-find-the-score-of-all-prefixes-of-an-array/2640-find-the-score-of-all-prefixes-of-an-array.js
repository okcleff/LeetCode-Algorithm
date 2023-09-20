/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function(nums) {
  const answer = [];
  let max = 0;
  let sum = 0;
  
  for (const n of nums) {
    max = Math.max(max, n);
    sum += n + max;
    answer.push(sum);
  }
  
  return answer;
};