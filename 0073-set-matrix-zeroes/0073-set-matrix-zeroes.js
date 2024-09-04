/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const track = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) track.push([i, j]);
    }
  }

  for (let i = 0; i < track.length; i++) {
    const [x, y] = track[i];

    for (let j = 0; j < matrix[0].length; j++) {
      matrix[x][j] = 0;
    }

    for (let j = 0; j < matrix.length; j++) {
      matrix[j][y] = 0;
    }
  }
};