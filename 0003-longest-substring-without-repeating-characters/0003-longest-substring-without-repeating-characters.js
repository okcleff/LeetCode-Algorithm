/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	let start = 0;
	let answer = 0;
	const map = new Map();

	for (let i = 0; i < s.length; i++) {
		if (map.get(s[i]) >= start) start = map.get(s[i]) + 1;
		map.set(s[i], i);

		if (i - start + 1 > answer) answer = i - start + 1;
	}

	return answer;
};