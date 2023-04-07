/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
	const leftover = s.length % k;
	if (leftover) {
		for (let i = 0; i < k - leftover; i++) {
			s += fill;
		}
	}

	const answer = [];
	for (let i = 0; i < s.length; i += k) {
		answer.push(s.slice(i, i + k));
	}
	return answer;
};