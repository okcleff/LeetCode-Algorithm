/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
	if (s.length <= 1) return 0;
	var preRun = 0;
	var curRun = 1;
	var count = 0;

	for (var i = 1; i < s.length; i++) {
		if (s[i - 1] === s[i]) curRun++;
		else {
			preRun = curRun;
			curRun = 1;
		}
		if (preRun >= curRun) count++;
	}
	return count;
};