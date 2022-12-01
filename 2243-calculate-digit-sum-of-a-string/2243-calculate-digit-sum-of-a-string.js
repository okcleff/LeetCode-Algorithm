/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
	while (s.length > k) {
		let merged = '';
		for (let i = 0; i < s.length; i += k) {
			const slice = s.slice(i, i + k);
			merged += [...slice].reduce((acc, curr) => acc + curr * 1, 0);
		}
		s = merged;
	}
	return s;
};