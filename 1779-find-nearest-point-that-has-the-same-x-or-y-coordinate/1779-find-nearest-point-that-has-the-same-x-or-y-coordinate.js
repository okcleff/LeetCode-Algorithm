/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
  let answer = -1;
  let minDistance = Infinity;
  
  points.forEach((point, idx) => {
    const [a, b] = point;
    if (a === x || b === y) {
      const distance = Math.abs(a - x) + Math.abs(b - y);
      if (distance < minDistance) {
        minDistance = distance;
        answer = idx;
      }
    }
  })
  
  return answer;
};