/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  return [
    [...new Set(nums1)].filter((x) => !nums2.includes(x)),
    [...new Set(nums2)].filter((x) => !nums1.includes(x)),
  ];
};