/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  const arr = stones.split('');
  for (let i = arr.length - 1; i >= 0; i--) {
    if (jewels.indexOf(arr[i]) === -1) {
      arr.splice(i, 1);
    }
  }
  return arr.length;
};