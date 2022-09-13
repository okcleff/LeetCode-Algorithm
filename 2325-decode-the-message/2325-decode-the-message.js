/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
	let answer = '';
	const diagram = [...new Set(key.split(' ').join(''))];
	const hash = {};
	const alpha = 'abcdefghijklmnopqrstuvwxyz';

	for (let i = 0; i < alpha.length; i++) {
		hash[diagram[i]] = alpha[i];
	}

	for (let char of message) {
		answer += hash[char] || ' ';
	}

	return answer;
};