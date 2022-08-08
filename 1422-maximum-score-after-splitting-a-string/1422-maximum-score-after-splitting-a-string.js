/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
	let answer = 0;
	for (let i = 1; i < s.length; i++) {
		const left = s.substring(0, i);
		const right = s.substring(i);

		answer = Math.max(
			answer,
			[...left].filter((bin) => bin === '0').length +
				[...right].filter((bin) => bin === '1').length
		);
	}
	return answer;
};