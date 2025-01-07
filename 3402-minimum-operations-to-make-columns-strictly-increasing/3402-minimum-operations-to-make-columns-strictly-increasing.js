/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function(grid) {
  let count = 0;

  for (let i = 0; i < grid[0].length; i++) {
    for (let j = 1; j < grid.length; j++) {
      if (grid[j - 1][i] >= grid[j][i]) {
        const gap = grid[j - 1][i] - grid[j][i] + 1;
        grid[j][i] += gap;
        count += gap;
      }
    }
  }

  return count;
};