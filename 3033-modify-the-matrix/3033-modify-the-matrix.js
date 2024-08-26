/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
  const colMaxNums = [];
  
  for (let c = 0; c < matrix[0].length; c++) {
    let max = -Infinity;
    for (let r = 0; r < matrix.length; r++) {
      max = Math.max(max, matrix[r][c]);
    }
    colMaxNums.push(max);
  }
  
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === -1) {
        matrix[r][c] = colMaxNums[c];
      }
    }
  }

  return matrix;
};