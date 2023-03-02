/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
	const answer = [];
	let stack = [];

	for (let i = 0; i <= pattern.length; i++) {
		stack.push(i + 1);
		if (pattern[i] === 'I' || i === pattern.length) {
			answer.push(...stack.reverse());
			stack = [];
		}
	}

	return answer.join('');
};