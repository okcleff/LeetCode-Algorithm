/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
  const sort = [...score].sort((a, b) => b - a);
  
  const rank = new Map();
  for (let i = 0; i < sort.length; i++) {
    if (i === 0) {
      rank.set(sort[i], 'Gold Medal');
    } else if (i === 1) {
      rank.set(sort[i], 'Silver Medal');
    } else if (i === 2) {
      rank.set(sort[i], 'Bronze Medal');
    } else {
      rank.set(sort[i], `${i + 1}`);
    }
  }

  for (let i = 0; i < score.length; i++) {
    score[i] = rank.get(score[i]);
  }
  return score;
};