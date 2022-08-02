/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
	let leng = grid.length;
	let answer = 0;
	for (let i = 0; i < leng; i++) {
    let row = grid[i];
		for (let j = 0; j < leng; j++) {
			let column = grid.map((row) => {
				return row[j];
			});
			answer += Math.min(Math.max(...row), Math.max(...column)) - grid[i][j];
		}
	}
	return answer;
};