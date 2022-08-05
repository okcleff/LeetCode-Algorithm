/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
	let seconds = 0;
	let start = 1;
	for (let i = 0; i < word.length; i++) {
		const moves = Math.abs(word[i].charCodeAt(0) - 96 - start);
		seconds += Math.min(moves, 26 - moves) + 1;
		start = word[i].charCodeAt(0) - 96;
	}

	return seconds;
};