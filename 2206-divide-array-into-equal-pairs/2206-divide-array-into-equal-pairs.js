/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
  const hash = {};
  nums.map((num) => (hash[num] = (hash[num] || 0) + 1));
  for (let key in hash) {
    if (hash[key] % 2 !== 0) return false;
  }
  return true;
};