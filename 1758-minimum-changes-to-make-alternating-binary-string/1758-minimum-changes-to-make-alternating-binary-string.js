/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
	let count = 0;
  
	for (let i = 1; i < s.length; i++) {
		if (s[0] === '0') {
			if (i % 2 === 0 && s[i] !== '0') count++;
			if (i % 2 !== 0 && s[i] !== '1') count++;
		} else {
			if (i % 2 === 0 && s[i] !== '1') count++;
			if (i % 2 !== 0 && s[i] !== '0') count++;
		}
	}
  
	return Math.min(count, s.length - count);
};