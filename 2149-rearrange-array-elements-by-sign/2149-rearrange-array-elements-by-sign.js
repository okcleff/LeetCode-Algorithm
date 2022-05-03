/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  const pos = [];
  const neg = [];
  nums.map((num) => {
    num > 0 ? pos.push(num) : neg.push(num);
  });

  const result = [];
  for (let i = 0; i < pos.length; i++) {
    result.push(pos[i]);
    result.push(neg[i]);
  }
  return result;
};