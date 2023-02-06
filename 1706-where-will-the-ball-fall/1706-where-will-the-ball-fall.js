/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
	const findPath = (row, col) => {
		if (row === grid.length) return col;

		let dir = grid[row][col];

		if (dir === 1 && grid[row][col + 1] === 1)
			return findPath(row + 1, col + 1);

		if (dir === -1 && grid[row][col - 1] === -1)
			return findPath(row + 1, col - 1);

		return -1;
	};

	const answer = [];

	for (let i = 0; i < grid[0].length; i++) {
		answer.push(findPath(0, i));
	}

	return answer;
};