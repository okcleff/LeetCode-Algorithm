/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
	const map = new Map();

	for (let i = 1; i <= n; i++) {
		map.set(i, 1);
	}

	for (let [voter, candidate] of trust) {
		map.set(voter, map.get(voter) - 1);
		map.set(candidate, map.get(candidate) + 1);
	}

	for (let [key, value] of map) {
		if (value === n) return key;
	}

	return -1;
};