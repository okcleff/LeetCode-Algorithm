/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
	const backspaced = (str) => {
		let result = [];
		[...str].map((char) => {
			char === '#' ? result.pop() : result.push(char);
		});
		return result.join('');
	};

	return backspaced(s) === backspaced(t);
};