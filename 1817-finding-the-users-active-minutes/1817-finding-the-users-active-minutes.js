/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
	const hash = new Map();
	logs.map((log) => {
		hash.has(log[0])
			? hash.set(log[0], [...hash.get(log[0]), log[1]])
			: hash.set(log[0], [log[1]]);
	});

	let answer = new Array(k).fill(0);
	for (let [k, v] of hash) {
		answer[new Set(v).size - 1]++;
	}

	return answer;
};