/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
	const m = grid.length;
	const n = grid[0].length;

	function count(grid, i, j) {
		if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0) return 0;

		grid[i][j] = 0;
		let land = 1;
		land +=
			count(grid, i + 1, j) +
			count(grid, i - 1, j) +
			count(grid, i, j + 1) +
			count(grid, i, j - 1);

		return land;
	}

	let answer = 0;
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			let area = count(grid, i, j);
			answer = Math.max(answer, area);
		}
	}
	return answer;
};