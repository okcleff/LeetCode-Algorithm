/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
  const answer = [];
  
  for (let i = 1; i < mountain.length - 1; i++) {
    if (mountain[i] > mountain[i-1] && mountain[i] > mountain[i+1]) answer.push(i);
  }
  
  return answer;
};