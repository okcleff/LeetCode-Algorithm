/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const dict = {};
  nums.map((num) => {
    dict[num] = (dict[num] || 0) + 1;
  });
  return nums.sort((a, b) => {
    if (dict[a] === dict[b]) {
      return b - a;
    } else {
      return dict[a] - dict[b];
    }
  });
};