/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
  const map = new Map();
  
  nums.forEach(num => {
    map.set(num, map.get(num) ? map.get(num) + 1 : 1); 
  })
  
  const max = Math.max(...map.values());
  
  let answer = 0;
  
  for (let entry of map) {
    entry[1] === max && (answer += entry[1])
  }
  
  return answer;
};