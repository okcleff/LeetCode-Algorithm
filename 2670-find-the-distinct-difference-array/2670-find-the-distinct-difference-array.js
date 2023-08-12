/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
  const answer = [];
    
  for (let i = 0; i < nums.length; i++) {
    const prefix = new Set();
    const suffix = new Set();
            
    for (let j = 0; j <= i; j++) {
      prefix.add(nums[j]);
    }
        
    for (let j = i + 1; j < nums.length; j++) {
      suffix.add(nums[j]);
    }

    answer.push(prefix.size - suffix.size);
  }

  return answer;
};