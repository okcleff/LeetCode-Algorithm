/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
  const lost = {};
  
  for (let [winner, loser] of matches) {
    lost[winner] = (lost[winner] || 0);
    lost[loser] = (lost[loser] || 0) + 1;
  }
  
  const answer = [[], []];
  
  for (let player in lost) {
    if (lost[player] === 0) answer[0].push(+player);
    else if (lost[player] === 1) answer[1].push(+player);
  }
  
  return answer;
};