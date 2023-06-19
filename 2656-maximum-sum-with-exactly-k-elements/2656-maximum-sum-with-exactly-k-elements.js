/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
  let max = Math.max(...nums);
  let sum = max;
  
  for(let i = 1; i < k; i++){
    sum += max + i;
  }
  
  return sum;
};