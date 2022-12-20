/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
	let answer = '';

	for (let i = 0; i < s.length; i++) {
		let curr = s[i];

		if (s[i + 2] === '#') {
			curr = s.slice(i, i + 2);
			i += 2;
		}

		answer += String.fromCharCode(curr * 1 + 96);
	}

	return answer;
};