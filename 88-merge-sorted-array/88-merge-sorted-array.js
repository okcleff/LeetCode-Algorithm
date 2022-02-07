/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
  if (m === 0) {
    nums1.splice(0, nums1.length);
    nums2.map((el) => nums1.push(el));
    return nums1.sort(function (a, b) {
      return a - b;
    });
  }
  nums1.splice(nums1.length - n, n);
  nums2.map((el) => nums1.push(el));
  return nums1.sort(function (a, b) {
    return a - b;
  });
};