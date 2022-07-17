/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
	let answer = 0;
	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		[...allowed].map((letter) => {
			word = word.replaceAll(letter, '');
		});
		if (word.length === 0) {
			answer++;
		}
	}
	return answer;  
};