/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const minus = [];
  nums.map((el) => minus.push(target - el));

  if (minus.indexOf(0) !== -1) {
    return minus.indexOf(0);
  }

  for (let i = 0; i < minus.length; i++) {
    if (minus[i] < 0) {
      return i;
    }
  }

  return minus.length;
};