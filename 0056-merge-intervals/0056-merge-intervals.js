/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  
  const answer = [intervals[0]];
  
  for (let curr of intervals) {
    let prev = [...answer].pop();
    
    if (prev[1] >= curr[0]) {
      prev[1] = Math.max(curr[1], prev[1]);
    } else {
      answer.push(curr);
    }
  }
  
  return answer;
};