/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
  const concat = [...nums1, ...nums2].sort((a, b) => a - b);
  
  for (let i = 0; i < concat.length - 1; i++) {
    if (concat[i] === concat[i + 1] && nums1.indexOf(concat[i]) !== -1 && nums2.indexOf(concat[i]) !== -1) return concat[i];
  }
  
  return -1;
};