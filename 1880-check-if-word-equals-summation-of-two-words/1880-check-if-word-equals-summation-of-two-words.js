/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
	const dict = {
		a: 0,
		b: 1,
		c: 2,
		d: 3,
		e: 4,
		f: 5,
		g: 6,
		h: 7,
		i: 8,
		j: 9,
	};

	const sum = (str) => {
		let result = '';
		str.split('').map((char) => {
			result += dict[char];
		});
		return Number(result);
	};

	return sum(firstWord) + sum(secondWord) === sum(targetWord);
};