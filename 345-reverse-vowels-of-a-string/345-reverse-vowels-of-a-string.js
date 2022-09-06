/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
	const dict = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

	const vowel = [...s].filter((char) => {
		return dict.includes(char);
	});

	let result = [];

	[...s].map((char) => {
		dict.includes(char)
			? (result.push(vowel[vowel.length - 1]), vowel.pop())
			: result.push(char);
	});

	return result.join('');
};