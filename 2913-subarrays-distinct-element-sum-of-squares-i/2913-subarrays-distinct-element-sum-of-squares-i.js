/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
  const leng = nums.length;
  let answer = 0;

  for (let i = 0; i < leng; i++) {
    const distinctNums = new Set();
    
    for (let j = i; j < leng; j++) {
      distinctNums.add(nums[j]);
      answer += distinctNums.size ** 2;
    }
  }

  return answer;
};