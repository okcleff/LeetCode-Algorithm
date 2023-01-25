/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function(s, t) {
	let answer = 0;
	for (let i = 0; i < s.length; i++) {
		for (let j = 0; j < t.length; j++) {
			let diff = 0;
			let x = i;
			let y = j;

			while (x < s.length && y < t.length) {
				if (s[x] !== t[y]) {
					diff++;
				}
				if (diff === 1) answer++;
				if (diff > 1) break;
				x++;
				y++;
			}
		}
	}
	return answer;
};