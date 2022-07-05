/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
	let answer = '';
	let i = 0;
	while (i < word1.length && i < word2.length) {
		answer += word1[i] + word2[i];
		i++;
	}
	return (
		answer + (word1.length > word2.length ? word1.slice(i) : word2.slice(i))
	);
};