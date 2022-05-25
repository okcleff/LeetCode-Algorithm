/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const count = {};
  nums1.map((num) => {
    count[num] = (count[num] || 0) + 1;
  });

  const result = [];
  nums2.map((num) => {
    if (count[num] > 0) {
      result.push(num);
      count[num]--;
    }
  });
  return result;
};