/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  // let answer = [];
  
  // [...set1].map((num) => {
  //   if (set2.has(num)) answer.push(num);
  // });
  
  // for(let num of set1){
  //   if (set2.has(num)) answer.push(num);
  // }
  
  // return answer;
  
  return [...set1].filter(num => set2.has(num));
};