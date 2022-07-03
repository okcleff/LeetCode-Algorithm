/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
	const makeStr = (freq) => {
		let str = '';
		for (let i = 0; i < freq; i++) {
			str += 'x';
		}
		return str;
	};

	return n % 2 ? makeStr(n) : makeStr(n - 1) + 'y';
};