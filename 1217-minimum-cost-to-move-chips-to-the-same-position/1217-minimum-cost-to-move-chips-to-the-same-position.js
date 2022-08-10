/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
	const even = position.filter((num) => num % 2 === 0);
	const odd = position.filter((num) => num % 2 === 1);
	return Math.min(even.length, odd.length);
};