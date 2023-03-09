/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
	const m = grid.length;
	const n = grid[0].length;

	const row = [];
	for (let i = 0; i < m; i++) {
		let onesRow = 0;
		let zerosRow = 0;

		for (let j = 0; j < n; j++) {
			grid[i][j] ? onesRow++ : zerosRow++;
		}

		row.push(onesRow - zerosRow);
	}

	const col = [];
	for (let i = 0; i < n; i++) {
		let onesCol = 0;
		let zerosCol = 0;

		for (let j = 0; j < m; j++) {
			grid[j][i] ? onesCol++ : zerosCol++;
		}

		col.push(onesCol - zerosCol);
	}

	const answer = [];

	for (let i = 0; i < m; i++) {
		answer.push([]);
		for (let j = 0; j < n; j++) {
			answer[i].push(row[i] + col[j]);
		}
	}

	return answer;
};