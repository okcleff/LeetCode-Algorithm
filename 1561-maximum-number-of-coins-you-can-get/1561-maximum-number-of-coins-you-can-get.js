/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
  piles.sort((a, b) => a - b);
  const leng = piles.length;
  let answer = 0;
  for (let i = leng / 3; i < leng; i += 2) {
    answer += piles[i];
  }
  return answer;
};