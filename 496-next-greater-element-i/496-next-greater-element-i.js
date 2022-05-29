/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    return nums1.map((num1) => nums2.slice(nums2.indexOf(num1), nums2.length).find(num2 => num2 > num1) ?? -1);

};