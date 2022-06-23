/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
	let step = 0;
	while (num > 0) {
		num % 2 ? (num = num - 1) / 2 : (num = num / 2);
		step++;
	}
	return step;
};