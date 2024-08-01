/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
  const averages = [];
  nums.sort((a, b) => a - b);
  
  while (nums.length) {
    const max = nums.pop();
    const min = nums.shift();
    
    averages.push((max + min) / 2);
  }
  
  averages.sort((a, b) => a - b);
  
  return averages[0];
};