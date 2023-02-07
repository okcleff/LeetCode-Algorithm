/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	const hash = {};
	const answer = [];

	strs.map((str) => {
		const sorted = [...str].sort();

		hash[sorted] ? hash[sorted].push(str) : (hash[sorted] = [str]);
	});

	for (let key in hash) {
		answer.push(hash[key]);
	}

	return answer;
};