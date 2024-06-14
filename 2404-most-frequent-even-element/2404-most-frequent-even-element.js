/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
  const evenArr = nums.filter(num => num % 2 === 0);
  if (evenArr.length === 0) return -1;
    
  const map = new Map();
  for (const num of evenArr) {
    map.set(num, (map.get(num) || 0) + 1);
  }
    
  return [...map.keys()].sort((a, b) => map.get(b) - map.get(a) || a - b)[0];    
};