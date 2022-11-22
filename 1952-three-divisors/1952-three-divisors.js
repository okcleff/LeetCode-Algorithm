/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
  let divisors = 2;
	for (let i = 2; i < n; i++) {
		if (n % i === 0) divisors++;
	}
	return divisors === 3;
};