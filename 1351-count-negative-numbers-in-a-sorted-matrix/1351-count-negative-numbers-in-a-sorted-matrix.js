/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  // let count = 0;
  // grid.map((arr) => {
  //   arr.map((num) => (num < 0 ? count++ : null));
  // });
  // return count;
  
  // let count = 0;
  // const concat = grid.reduce((a, b) => [...a, ...b]);
  // concat.map((num) => (num < 0 ? count++ : 0));
  // return count;
  
  return grid.flat().filter(num => num < 0).length;
};