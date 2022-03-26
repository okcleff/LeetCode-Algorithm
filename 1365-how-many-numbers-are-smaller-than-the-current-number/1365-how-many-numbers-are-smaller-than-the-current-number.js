/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  const counter = (arr) => {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[0]) count++;
    }
    return count;
  };

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(counter(nums));
    nums.push(nums[0]);
    nums.shift();
  }
  return result;
};