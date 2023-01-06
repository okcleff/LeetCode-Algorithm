/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
	let answer = '';

	for (let char of s) {
		if (/[A-Z]/.test(char)) {
			if (s.includes(char.toLowerCase())) {
				answer = char.charCodeAt() > (answer.charCodeAt() || 0) ? char : answer;
			}
		} else {
			if (s.includes(char.toUpperCase())) {
				answer =
					char.toUpperCase().charCodeAt() > (answer.charCodeAt() || 0)
						? char.toUpperCase()
						: answer;
			}
		}
	}

	return answer;
};