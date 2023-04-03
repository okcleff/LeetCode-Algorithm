/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
	const answer = [];

	const dfs = (current, start) => {
		if (current.length == k) {
			answer.push(current);
			return;
		}
		for (let i = start; i <= n; i++) {
			dfs([...current, i], i + 1);
		}
	};

	dfs([], 1);
	return answer;
};