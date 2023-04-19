/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
	const map = new Map();
	[...order].map((char, idx) => map.set(char, idx));

	for (let i = 0; i < words.length - 1; i++) {
		let j = 0;
		while (words[i][j] && words[i + 1][j]) {
			if (map.get(words[i][j]) < map.get(words[i + 1][j])) break;
			if (map.get(words[i][j]) > map.get(words[i + 1][j])) return false;
			if (map.get(words[i][j]) === map.get(words[i + 1][j])) {
				j++;
				if (j === words[i + 1].length && words[i].length > words[i + 1].length)
					return false;
			}
		}
	}

	return true;
};