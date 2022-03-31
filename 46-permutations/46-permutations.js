/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const results = [];
  
  const backtrack = (nums, temp) => {
    if (temp.length === nums.length) {
      results.push(temp.slice());
      return;
    }
    
    nums.forEach(function(num) {
      if (!temp.includes(num)) {
        temp.push(num);
        backtrack(nums, temp);
        temp.pop();
      }
    });
  };
  
  backtrack(nums, []);
  return results;
};