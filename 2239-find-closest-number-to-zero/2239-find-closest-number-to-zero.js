/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
  let min = Infinity;
  let answer = null;
    
  for (const num of nums) {
    const abs = Math.abs(num)
        
    if (abs < min) {
      min = abs;
      answer = num;
    } else if (abs === min) {
      answer = answer < num ? num : answer;
    }
  }
    
  return answer;
};