/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
  const countCommonElements = (arr1, arr2) => {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
      if(arr2.includes(arr1[i])) count++;
    }
    return count;
  }
  
  return [countCommonElements(nums1, nums2), countCommonElements(nums2, nums1)];
};