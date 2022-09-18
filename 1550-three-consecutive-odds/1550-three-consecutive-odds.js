/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
  let seq = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 ? seq++ : (seq = 0);
    if (seq === 3) return true;
  }
  return false;
};