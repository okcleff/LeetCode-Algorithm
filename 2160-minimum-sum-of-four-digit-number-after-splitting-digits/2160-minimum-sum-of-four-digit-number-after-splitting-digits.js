/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
  const arr = num
    .toString()
    .split('')
    .sort((a, b) => a - b);
  return Number(arr[0] + arr[2]) + Number(arr[1] + arr[3]);
};