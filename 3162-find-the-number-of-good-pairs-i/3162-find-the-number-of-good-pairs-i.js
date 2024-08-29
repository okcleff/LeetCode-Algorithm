/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
  let answer = 0;
  
  nums2.forEach(num2 => {
    nums1.forEach(num1 => {
      if (num1 % (num2 * k) === 0) answer++;
    })
  })
  
  return answer;
};