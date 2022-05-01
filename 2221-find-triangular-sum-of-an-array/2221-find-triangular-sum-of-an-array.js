/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
  if (nums.length === 1) return nums[0];

  let answer = [...nums];

  const triSum = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length - 1; i++) {
      let sum = arr[i] + arr[i + 1];
      result.push(sum % 10);
    }
    return result;
  };

  while (answer.length > 1) {
    answer = triSum(answer);
  }

  return answer[0];
};