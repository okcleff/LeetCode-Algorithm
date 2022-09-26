/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
	const dict = {
		first: 'qwertyuiop',
		second: 'asdfghjkl',
		third: 'zxcvbnm',
	};

	let row;

	const findRow = (str) => {
		for (let key in dict) {
			if (dict[key].includes(str[0])) row = dict[key];
		}

		for (let char of str) {
			if (!row.includes(char)) return false;
		}

		return true;
	};

	let answer = [];
	for (let i = 0; i < words.length; i++) {
		const word = words[i].toLowerCase();
		if (findRow(word)) answer.push(words[i]);
	}
	return answer;
};