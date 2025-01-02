/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
  let min = Infinity;

  nums.forEach(num => {
    const str = num.toString();
    const digits = [...str];
    const sum = digits.reduce((acc, curr) => acc + Number(curr), 0);
    min = Math.min(sum, min);
  })

  return min;
};