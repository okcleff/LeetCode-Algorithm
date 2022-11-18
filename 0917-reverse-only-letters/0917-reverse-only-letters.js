/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
	const l = s.split('').filter((char) => /[a-zA-Z]/.test(char));
	const answer = [];
	for (let i = 0; i < s.length; i++) {
		/[a-zA-Z]/.test(s[i]) ? answer.push(l.pop()) : answer.push(s[i]);
	}
	return answer.join('');
};