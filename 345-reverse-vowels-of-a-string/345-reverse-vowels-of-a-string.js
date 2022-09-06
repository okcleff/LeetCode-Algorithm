/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
	const dict = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

	const vowel = [...s]
		.filter((char) => {
			return dict.includes(char);
		})
		.reverse();

	let result = [];

	[...s].map((char) => {
		dict.includes(char)
			? (result.push(vowel[0]), vowel.shift())
			: result.push(char);
	});

	return result.join('');
};