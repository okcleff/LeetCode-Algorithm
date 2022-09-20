/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
	if (s.length <= 1) return 0;
	let preRun = 0;
	let curRun = 1;
	let count = 0;

	for (let i = 1; i < s.length; i++) {
		if (s[i - 1] === s[i]) curRun++;
		else {
			preRun = curRun;
			curRun = 1;
		}
		if (preRun >= curRun) count++;
	}
  
	return count;
};