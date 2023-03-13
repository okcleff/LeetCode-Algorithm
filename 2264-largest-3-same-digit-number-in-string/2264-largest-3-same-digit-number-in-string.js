/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
	let max = '';
	for (let i = 0; i < num.length - 2; i++) {
		const sub = num.substring(i, i + 3);

		if (new Set([...sub]).size === 1) {
			max = Math.max(max, sub);
		}
	}

	return max + '' === '0' ? '000' : max + '';
};