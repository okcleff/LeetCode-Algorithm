/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
  const dict = {};
  arr.map((char) => {
    return (dict[char] = (dict[char] || 0) + 1);
  });
  for (let i = 0; i < arr.length; i++) {
    if (dict[arr[i]] === 1) k--;
    if (k === 0) return arr[i];
  }
  return '';
};