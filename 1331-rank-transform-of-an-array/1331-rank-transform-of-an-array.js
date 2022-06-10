/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  const ranks = new Map(
    [...new Set(arr)].sort((a, b) => a - b).map((val, idx) => [val, idx + 1])
  );
  return arr.map((val) => ranks.get(val));
};