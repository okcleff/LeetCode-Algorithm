/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
	if (s.length === 1) return false;
  
	for (let i = 1; i < s.length / 2 + 1; i++) {
		const sub = s.slice(0, i);
		if (!s.replaceAll(sub, '').length) return true;
	}
  
	return false;
};