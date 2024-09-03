/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
  const players = new Array(n).fill(0);
  players[0] = 1;
  
  let i = 1;
  let startIdx = 0;
  while (players.indexOf(2) === -1) {
    startIdx = (i * k + startIdx) % n;
    players[startIdx]++;
    i++;
  }
  
  const answer = [];
  players.forEach((count, idx) => {
    if (count === 0) answer.push(idx + 1);
  })  
  
  return answer;
};