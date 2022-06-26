/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const right = arr.slice(i + 1);
    arr[i] = Math.max(...right);
  }
  arr.pop();
  arr.push(-1);
  return arr;
};