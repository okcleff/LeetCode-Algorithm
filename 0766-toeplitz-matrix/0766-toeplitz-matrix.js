/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  for (let i = 1; i < matrix.length; i++) {
		for (let j = matrix[i].length - 1; j > 0; j--) {
			if (matrix[i][j] !== matrix[i - 1][j - 1]) return false;
		}
	}

	return true;
};