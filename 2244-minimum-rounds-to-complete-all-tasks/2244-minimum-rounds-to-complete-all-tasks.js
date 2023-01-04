/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
	const hash = {};
	let answer = 0;

	tasks.map((task) => {
		hash[task] = hash[task] + 1 || 1;
	});

	for (let key in hash) {
		if (hash[key] < 2) return -1;
		answer += Math.ceil(hash[key] / 3);
	}

	return answer;
};