/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
	const nSum = (n * (n + 1)) / 2;
	for (let i = 1; i <= n; i++) {
		const iSum = (i * (i + 1)) / 2;
		if (iSum === nSum - iSum + i) return i;
	}
	return -1;
};