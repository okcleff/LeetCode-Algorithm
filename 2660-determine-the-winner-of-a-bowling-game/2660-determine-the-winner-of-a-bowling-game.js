/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
  const getScore = (arr) => arr.reduce((a, b, i) => a + (b * ((arr[i - 1] === 10 || arr[i - 2] === 10) ? 2 : 1)), 0);
  
  const p1Score = getScore(player1);
  const p2Score = getScore(player2);
  
  if (p1Score === p2Score) return 0;
  return p1Score > p2Score ? 1 : 2;
};