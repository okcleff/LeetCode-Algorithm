/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
  points.sort((a, b) => a[0] - b[0]);
    
  let answer = 0;
  for (let i = 1; i < points.length; i++) {
    answer = Math.max(answer, points[i][0] - points[i-1][0]);
  }
    
  return answer;
};