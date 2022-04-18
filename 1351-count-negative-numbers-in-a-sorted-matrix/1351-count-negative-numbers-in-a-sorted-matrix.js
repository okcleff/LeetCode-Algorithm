/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  let count = 0;
  grid.map((arr) => {
    arr.map((num) => (num < 0 ? count++ : null));
  });
  return count;
};