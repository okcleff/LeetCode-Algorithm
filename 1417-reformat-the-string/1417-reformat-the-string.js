/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
	const num = [];
	const str = [];

	for (let el of s) {
		/[a-z]/.test(el) ? str.push(el) : num.push(el);
	}

	let answer = '';

	if (Math.abs(num.length - str.length) > 1) return answer;

	if (num.length > str.length) {
		for (let i = 0; i < num.length; i++) {
			answer += num[i];
			answer += str[i] || '';
		}
	} else {
		for (let i = 0; i < str.length; i++) {
			answer += str[i];
			answer += num[i] || '';
		}
	}

	return answer;
};