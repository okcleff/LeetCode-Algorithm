/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
	let answer = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j]) {
				if (!grid[i - 1]?.[j]) answer++;
				if (!grid[i + 1]?.[j]) answer++;
				if (!grid[i]?.[j - 1]) answer++;
				if (!grid[i]?.[j + 1]) answer++;
			}
		}
	}
	return answer;
};