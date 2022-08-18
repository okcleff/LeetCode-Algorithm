/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
	const patternSet = new Set([...pattern]);
  
	return words
		.filter((word) => {
			const wordSet = new Set([...word]);

			let obj = {};
			[...wordSet].map((char, idx) => {
				obj[char] = [...patternSet][idx];
			});

			return (
				[...word]
					.map((char) => {
						return (char = obj[char]);
					})
					.join('') === pattern
			);
		});
};