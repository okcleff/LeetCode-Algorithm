/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
  const [a, b, c] = [...nums].sort((a, b) => a - b);
  
  if (a + b <= c) return 'none';

  const set = new Set(nums);

  if (set.size === 3) return 'scalene';
  if (set.size === 2) return 'isosceles';
  if (set.size === 1) return 'equilateral';
};