/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
  const arr = grid.flat();
  const leng = grid[0].length;
  const answer = [];

  while (k--) {
    arr.unshift(arr.pop());
  }

  while (arr.length) {
    answer.push(arr.splice(0, leng));
  }

  return answer;
};