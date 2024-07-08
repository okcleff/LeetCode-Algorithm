/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
  const [a, b, c] = nums;
  
  if (a + b <= c || a + c <= b || b + c <= a) return 'none';

  const set = new Set(nums);

  if (set.size === 3) return 'scalene';
  if (set.size === 2) return 'isosceles';
  if (set.size === 1) return 'equilateral';
};