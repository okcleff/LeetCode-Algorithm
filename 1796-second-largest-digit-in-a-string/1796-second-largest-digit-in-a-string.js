/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
	const numberOnly = s.replace(/[^0-9]/g, '');
	const set = new Set([...numberOnly].map((str) => Number(str)));
	return set.size < 2 ? -1 : [...set].sort((a, b) => b - a)[1];
};