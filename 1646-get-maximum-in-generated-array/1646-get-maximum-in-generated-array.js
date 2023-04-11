/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
	if (n < 2) return n;

	const answer = new Array(n + 1).fill(0);
	answer[1] = 1;

	for (let i = 2; i <= n; i++) {
		answer[i] =
			i % 2
				? answer[parseInt(i / 2)] + answer[parseInt(i / 2) + 1]
				: (answer[i] = answer[parseInt(i / 2)]);
	}

	return Math.max(...answer);
};