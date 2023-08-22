/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
  const even = nums.filter(num => num % 2 === 0);
  const odd = nums.filter(num => num % 2 !== 0);
    
  const answer = [];
  
  for (let i = 0; i < nums.length / 2; i++) {
    answer.push(even[i]);
    answer.push(odd[i]);
  }
    
  return answer;
};