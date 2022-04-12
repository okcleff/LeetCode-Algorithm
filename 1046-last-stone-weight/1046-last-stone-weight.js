/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  let sorted = stones.sort((a, b) => a - b);
  while (sorted.length > 1) {
    let leng = sorted.length - 1;
    let crashed = sorted[leng] - sorted[leng - 1];
    sorted.pop();
    sorted.pop();
    if (crashed !== 0) {
      sorted.push(crashed);
      sorted.sort((a, b) => a - b);
    }
  }
  return sorted;
};