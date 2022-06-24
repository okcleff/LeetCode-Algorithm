/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
	const result = [];
	for (let i = s.charCodeAt(0); i <= s.charCodeAt(3); i++) {
		for (let j = s[1]; j <= s[4]; j++) {
			result.push(String.fromCharCode(i) + j);
		}
	}
	return result;
};