/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
	g.sort((a, b) => a - b);
	s.sort((a, b) => a - b);

	let i = 0;
	let j = 0;
	let answer = 0;
	while (i < s.length) {
		if (s[i] >= g[j]) {
			answer++;
			j++;
		}
		i++;
	}

	return answer;
};