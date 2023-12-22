/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
  const dict = {};
  
  const sumValue = arr => {
    arr.forEach(innerArr => {
      const [key, value] = innerArr;
      dict[key] = dict[key] ? dict[key] + value : value;
    })
  }
  
  sumValue(nums1);
  sumValue(nums2);
  
  return Object.keys(dict).map(key => [Number(key), dict[key]]);
};