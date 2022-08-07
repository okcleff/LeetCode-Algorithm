/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
  let answer = 0;

  for (let i = 1; i < points.length; i++) {
    let x = Math.abs(points[i][0] - points[i - 1][0]);
    let y = Math.abs(points[i][1] - points[i - 1][1]);
    answer += Math.max(x, y);
  }

  return answer;
};