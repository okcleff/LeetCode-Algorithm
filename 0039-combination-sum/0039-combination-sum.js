/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
	candidates.sort((x, y) => x - y);
	const answer = [];

	const dfs = (sum, start, path) => {
		if (sum === 0) return answer.push([...path]);

		for (let i = start; i < candidates.length; i++) {
			if (candidates[i] > sum) return;

			path.push(candidates[i]);

			dfs(sum - candidates[i], i, path);

			path.pop();
		}
	};

	dfs(target, 0, []);

	return answer;
};