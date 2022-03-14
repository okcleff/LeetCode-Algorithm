/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const obj = {};
  const result = [];
  nums.map((el) => {
    obj[el] = (obj[el] || 0) + 1;
    if (obj[el] === 2) result.push(el);
  });
  return result;
};