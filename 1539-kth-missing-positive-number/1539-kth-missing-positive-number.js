/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  const set = new Set(arr);
  let answer = 0;
  while (k) {
    answer++;
    if (!set.has(answer)) k--;
  }
  return answer;
};