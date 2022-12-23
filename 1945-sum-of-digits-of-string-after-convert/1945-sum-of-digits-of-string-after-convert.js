/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
	let convert = [...s].map((char) => char.charCodeAt() - 96).join('');

	while (convert.length > 1 && k) {
		let sum = [...convert].reduce((acc, curr) => acc + Number(curr), 0);
		convert = sum + '';
		k--;
	}

	return Number(convert);
};