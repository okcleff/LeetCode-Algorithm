/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
	const leng = grid.length;
	const rows = grid.map((row) => '.' + row.join('.'));
	const cols = [];

	for (let i = 0; i < leng; i++) {
		let col = '';
		for (let j = 0; j < leng; j++) {
			col += '.' + grid[j][i];
		}
		cols.push(col);
	}

	let answer = 0;

	for (let i = 0; i < leng; i++) {
		for (let j = 0; j < leng; j++) {
			if (rows[i] === cols[j]) answer++;
		}
	}

	return answer;
};