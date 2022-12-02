/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function(num1, num2) {
	const a = num1.split('+')[0];
	const b = num1.split('+')[1].slice(0, -1);
	const c = num2.split('+')[0];
	const d = num2.split('+')[1].slice(0, -1);

	const real = a * c - b * d;
	const imaginary = a * d + b * c;

	return `${real}+${imaginary}i`;
};