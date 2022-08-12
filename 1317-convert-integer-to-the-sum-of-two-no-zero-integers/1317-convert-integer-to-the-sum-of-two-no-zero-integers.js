/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
	let a = 1;
	let b = n - 1;
  
	const checkZero = (num) => {
		return num.toString().split('').indexOf('0');
	};
  
	while (a <= b) {
		if (checkZero(a) === -1 && checkZero(b) === -1) return [a, b];
		a++;
		b--;
	}
};