/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  	const morse = [
		'.-',
		'-...',
		'-.-.',
		'-..',
		'.',
		'..-.',
		'--.',
		'....',
		'..',
		'.---',
		'-.-',
		'.-..',
		'--',
		'-.',
		'---',
		'.--.',
		'--.-',
		'.-.',
		'...',
		'-',
		'..-',
		'...-',
		'.--',
		'-..-',
		'-.--',
		'--..',
	];

	const alphabet = Array.from(Array(26))
		.map((e, i) => i + 97)
		.map((x) => String.fromCharCode(x));

	const dict = {};
	alphabet.map((char, i) => {
		return (dict[char] = morse[i]);
	});

	const transform = (word) => {
		let result = '';
		for (let char of word) {
			result += dict[char];
		}
		return result;
	};

	const transformed = words.map((word) => {
		return transform(word);
	});

	return new Set(transformed).size;
};