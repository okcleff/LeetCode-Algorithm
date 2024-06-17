/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
  const map = new Map();
  
  divisors.forEach(divisor => {
    let count = 0;
    
    nums.forEach(num => {
      if (num % divisor === 0) count++;
    })
    
    map.set(divisor, count);
  })
  
  return [...map.keys()].sort((a, b) => map.get(b) - map.get(a) || a - b)[0];
};