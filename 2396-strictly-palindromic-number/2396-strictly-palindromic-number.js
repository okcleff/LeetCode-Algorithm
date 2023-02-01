/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
	for (let i = 2; i <= n - 2; i++) {
		const base = n.toString(i);
		if (base !== base.split('').reverse().join('')) return false;
	}
	return true;
};