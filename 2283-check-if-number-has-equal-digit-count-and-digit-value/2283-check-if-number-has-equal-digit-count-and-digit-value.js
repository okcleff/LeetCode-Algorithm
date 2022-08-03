/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
	let arr = [...num];
	let dict = {};
  
	arr.map((digit) => {
		dict[digit] = dict[digit] + 1 || 1;
	});

	for (let i = 0; i < num.length; i++) {
		if ((dict[i] || 0) !== Number(num[i])) return false;
	}

	return true;
};