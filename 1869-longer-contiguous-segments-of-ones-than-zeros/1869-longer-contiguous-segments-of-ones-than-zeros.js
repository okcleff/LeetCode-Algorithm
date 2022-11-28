/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
	let one = '1';
	let zero = '0';
	while (s.includes(one)) {
		one += '1';
	}
	while (s.includes(zero)) {
		zero += '0';
	}

	return one.length > zero.length;
};