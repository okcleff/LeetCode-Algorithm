/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
	return parseInt(
		([...s].filter((char) => char === letter).length / s.length) * 100
	);
};