/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
  const singleSum = [...nums].filter(num => num < 10).reduce((acc, curr) => acc + curr, 0);
  const doubleSum = [...nums].filter(num => num >= 10).reduce((acc, curr) => acc + curr, 0);
  
  return singleSum !== doubleSum;
};