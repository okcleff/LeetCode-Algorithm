/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  const dict = {};
  nums.map((num) => {
    dict[num] = (dict[num] || 0) + 1;
  });

  let answer = 0;
  for (let key in dict) {
    if (dict[key] === 1) answer = answer + Number(key);
  }
  return answer;
};