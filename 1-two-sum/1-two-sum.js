/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const sorted = [...nums].sort((a, b) => a - b);

  let start = 0;
  let end = sorted.length - 1;

  while (start < end) {
    const sum = sorted[start] + sorted[end];
    if (sum === target)
      return [nums.indexOf(sorted[start]), nums.lastIndexOf(sorted[end])];
    sum < target ? start++ : end--;
  }
};