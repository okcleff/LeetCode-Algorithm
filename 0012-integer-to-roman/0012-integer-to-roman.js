/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
	let answer = '';
	if (num < 1 || num > 3999) return answer;
	let integer = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	let roman = [
		'M',
		'CM',
		'D',
		'CD',
		'C',
		'XC',
		'L',
		'XL',
		'X',
		'IX',
		'V',
		'IV',
		'I',
	];
	let i = 0;
	while (num > 0) {
		if (num - integer[i] >= 0) {
			answer += roman[i];
			num -= integer[i];
		} else {
			i++;
		}
	}
	return answer;
};