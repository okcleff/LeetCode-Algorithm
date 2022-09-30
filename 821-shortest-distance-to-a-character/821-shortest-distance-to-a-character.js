/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
	const cIndex = [];
	[...s].map((char, idx) => {
		if (char === c) cIndex.push(idx);
	});

	return [...s].map((char, idx) => {
		let min = Infinity;
		cIndex.map((num) => {
			min = Math.min(min, Math.abs(idx - num));
		});
		return min;
	});
};