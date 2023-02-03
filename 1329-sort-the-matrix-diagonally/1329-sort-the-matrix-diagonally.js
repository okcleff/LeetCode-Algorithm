/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
	let map = {};
  
	for (let i = 0; i < mat.length; i++) {
		for (let j = 0; j < mat[0].length; j++) {
			const d = i - j;
			if (!map[d]) {
				map[d] = [];
			}
			map[d].push(mat[i][j]);
		}
	}
  
	for (let key in map) {
		map[key].sort((a, b) => b - a);
	}

	for (let i = 0; i < mat.length; i++) {
		for (let j = 0; j < mat[0].length; j++) {
			const d = i - j;
			mat[i][j] = map[d].pop();
		}
	}
  
	return mat;
};