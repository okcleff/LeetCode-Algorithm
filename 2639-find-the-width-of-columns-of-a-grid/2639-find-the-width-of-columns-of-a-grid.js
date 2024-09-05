/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
  const answer = [];
  
  for (let c = 0; c < grid[0].length; c++) {
    let max = 0;
    for (let r = 0; r < grid.length; r++) {
      max = Math.max(max, grid[r][c].toString().length);
    }
    answer.push(max);
  }
  
  return answer;
};