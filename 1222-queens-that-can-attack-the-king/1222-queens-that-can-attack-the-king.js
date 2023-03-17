/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
	const answer = [];
	const routes = [
		[-1, 0],
		[0, -1],
		[0, 1],
		[1, 0],
		[-1, -1],
		[-1, 1],
		[1, -1],
		[1, 1],
	];

	const findAttackableQueen = (position, route) => {
		position[0] += route[0];
		position[1] += route[1];

		let [x, y] = [position[0], position[1]];

		if (x >= 0 && x < 8 && y >= 0 && y < 8) {
			const attackableQueen = queens.find((q) => q[0] === x && q[1] === y);
			attackableQueen ? answer.push(attackableQueen) : findAttackableQueen(position, route);
		}
	};

	routes.forEach((route) => {
		findAttackableQueen([king[0], king[1]], route);
	});

	return answer;
};