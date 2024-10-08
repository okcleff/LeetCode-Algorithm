/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  const freq = new Map();
  const firstIndex = new Map();
  let degree = 0;
  let answer = 0;

  nums.forEach((num, i) => {
    if (!firstIndex.has(num)) firstIndex.set(num, i);
    
    const count = (freq.get(num) || 0) + 1;
    freq.set(num, count);

    if (count > degree) {
      degree = count;
      answer = i - firstIndex.get(num) + 1;
    } else if (count === degree) {
      answer = Math.min(answer, i - firstIndex.get(num) + 1);
    }
  });

  return answer;
};