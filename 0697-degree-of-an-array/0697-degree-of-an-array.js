/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  const dict = new Map();
  
  nums.forEach(num => {
    dict.set(num, dict.get(num) ? dict.get(num) + 1 : 1);
  })
  
  const degree = Math.max(...Array.from(dict.values()));;
  
  let answer = Infinity;
  
  for (const [key, value] of dict) {
    if (value === degree) {
      const length = nums.lastIndexOf(key) - nums.indexOf(key) + 1;
      answer = Math.min(answer, length);
    }
  }
  
  return answer;
};