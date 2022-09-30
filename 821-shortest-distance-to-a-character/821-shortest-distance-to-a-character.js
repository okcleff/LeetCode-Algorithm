/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
	const cIndices = [];
	[...s].map((char, idx) => {
		if (char === c) cIndices.push(idx);
	});

	return [...s].map((_, idx) => {
		let min = Infinity;
		cIndices.map((num) => {
			min = Math.min(min, Math.abs(idx - num));
		});
		return min;
	});
};