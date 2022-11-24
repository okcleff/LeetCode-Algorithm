/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
	let curr = s[0];
	let count = 1;
	let answer = s[0];
	for (let i = 1; i < s.length; i++) {
		if (s[i] === curr) {
			if (count < 2) {
				count++;
				answer += s[i];
			}
		} else {
			curr = s[i];
			count = 1;
			answer += s[i];
		}
	}
	return answer;
};